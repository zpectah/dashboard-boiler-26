import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { getConfig } from '../config';
import type { Forecast, WeatherStorage } from '../types';
import { storageForecastKey } from '../constants';

export const useWeather = () => {
  const { url, ui } = getConfig();

  const [weather, setWeather] = useState<null | Forecast>(null);
  const [error, setError] = useState<null | string>(null);

  const isInitialRender = useRef(true);

  const fetchWeather = async (lat: number, lng: number) => {
    const apiUrl = `${url.openMeteo}?current_weather=true&latitude=${lat}&longitude=${lng}`;
    const cachedData = localStorage.getItem(storageForecastKey);
    const now = Date.now();

    if (cachedData) {
      try {
        const { forecast, timestamp, coords } = JSON.parse(
          cachedData,
        ) as WeatherStorage;

        const isFresh = now - timestamp < ui.apiCacheDuration;
        const isSameLocation =
          Math.abs(coords.lat - lat) < 0.01 &&
          Math.abs(coords.lng - lng) < 0.01;

        if (isFresh && isSameLocation) {
          setWeather(forecast);

          return;
        }
      } catch (err) {
        console.error(err);
      }
    }

    try {
      axios
        .get(apiUrl)
        .then((res) => {
          const { data } = res;

          if (!data) return;

          const cacheObject: WeatherStorage = {
            forecast: data,
            timestamp: now,
            coords: { lat, lng },
          };

          localStorage.setItem(storageForecastKey, JSON.stringify(cacheObject));
          setWeather(data);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (err) {
      setError('error_data_loading');

      console.error(err);
    }
  };

  useEffect(() => {
    if (!isInitialRender.current) return;

    isInitialRender.current = false;

    if (!navigator.geolocation) {
      setError('unsupported_geolocation_service');

      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetchWeather(latitude, longitude);
      },
      (err) => {
        setError('geolocation_service_denied');

        console.error(err);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    weather,
    error,
  };
};
