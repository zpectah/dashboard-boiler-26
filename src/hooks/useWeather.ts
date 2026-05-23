import { useEffect, useState } from 'react';
import axios from 'axios';
import { getConfig } from '@/config';
import type {
  Forecast,
  NominatimReverseResponse,
  ReverseGeocodingStorage,
  WeatherStorage,
} from '@/types';
import {
  forecastStorageKey,
  reverseGeocodingLocationStorageKey,
  snippetWeatherRefreshTimeout,
} from '@/constants';

type WeatherState = {
  weather: Forecast | null;
  error: string | null;
  locationName: string | null;
};

export const useWeather = () => {
  const { api } = getConfig();

  const [{ weather, locationName, error }, setWeather] = useState<WeatherState>(
    {
      weather: null,
      error: null,
      locationName: null,
    },
  );

  const getLocationName = async (lat: number, lng: number) => {
    const cachedData = localStorage.getItem(reverseGeocodingLocationStorageKey);
    const now = Date.now();

    if (cachedData) {
      try {
        const { locationName, timestamp, coords } = JSON.parse(
          cachedData,
        ) as ReverseGeocodingStorage;

        const isFresh = now - timestamp < snippetWeatherRefreshTimeout;
        const isSameLocation =
          Math.abs(coords.lat - lat) < 0.01 &&
          Math.abs(coords.lng - lng) < 0.01;

        if (isFresh && isSameLocation) {
          return locationName;
        }
      } catch (err) {
        console.error(err);
      }
    }

    const { data } = await axios.get<NominatimReverseResponse>(
      api.openStreetMap,
      {
        params: {
          format: 'json',
          lat,
          lon: lng,
          zoom: 10,
          addressdetails: 1,
        },
      },
    );

    const address = data.address;

    const resolvedLocationName =
      address?.city ||
      address?.town ||
      address?.village ||
      address?.municipality ||
      address?.county ||
      address?.state ||
      address?.country ||
      null;

    if (resolvedLocationName) {
      const cacheObject: ReverseGeocodingStorage = {
        locationName: resolvedLocationName,
        timestamp: now,
        coords: { lat, lng },
      };

      localStorage.setItem(
        reverseGeocodingLocationStorageKey,
        JSON.stringify(cacheObject),
      );
    }

    return resolvedLocationName;
  };

  const getWeatherForecast = async (lat: number, lng: number) => {
    const apiUrl = `${api.openMeteo}?current_weather=true&latitude=${lat}&longitude=${lng}`;
    const cachedData = localStorage.getItem(forecastStorageKey);
    const now = Date.now();

    if (cachedData) {
      try {
        const { forecast, timestamp, coords } = JSON.parse(
          cachedData,
        ) as WeatherStorage;

        const isFresh = now - timestamp < 60 * 60 * 1000;
        const isSameLocation =
          Math.abs(coords.lat - lat) < 0.01 &&
          Math.abs(coords.lng - lng) < 0.01;

        if (isFresh && isSameLocation) {
          return forecast;
        }
      } catch (err) {
        console.error(err);
      }
    }

    const { data } = await axios.get<Forecast>(apiUrl);

    const cacheObject: WeatherStorage = {
      forecast: data,
      timestamp: now,
      coords: { lat, lng },
    };

    localStorage.setItem(forecastStorageKey, JSON.stringify(cacheObject));

    return data;
  };

  const getCurrentPosition = () =>
    new Promise<GeolocationPosition>((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('unsupported_geolocation_service'));

        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error),
        {
          enableHighAccuracy: false,
          timeout: 3000,
          maximumAge: 30 * 60 * 1000,
        },
      );
    });

  const loadWeather = (): Promise<WeatherState> =>
    getCurrentPosition()
      .then(async (position) => {
        const { latitude, longitude } = position.coords;

        const [forecast, locationName] = await Promise.all([
          getWeatherForecast(latitude, longitude),
          getLocationName(latitude, longitude),
        ]);

        return {
          weather: forecast,
          locationName,
          error: null,
        };
      })
      .catch((err) => {
        console.error(err);

        if (
          err instanceof Error &&
          err.message === 'unsupported_geolocation_service'
        ) {
          return {
            weather: null,
            locationName: null,
            error: 'unsupported_geolocation_service',
          };
        }

        if (axios.isAxiosError(err)) {
          return {
            weather: null,
            locationName: null,
            error: 'weather_forecast_request_failed',
          };
        }

        return {
          weather: null,
          locationName: null,
          error: 'geolocation_service_denied',
        };
      });

  useEffect(() => {
    let cancelled = false;

    loadWeather().then((state) => {
      if (!cancelled) {
        setWeather(state);
      }
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    weather,
    locationName,
    error,
  };
};
