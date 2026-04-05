import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import {
  WiDayHaze,
  WiCloudy,
  WiCloud,
  WiDayCloudyHigh,
  WiFog,
  WiDayFog,
  WiDaySprinkle,
  WiDaySleet,
  WiDayHail,
  WiShowers,
  WiStormShowers,
  WiDaySnow,
  WiSnowflakeCold,
  WiNa,
} from 'react-icons/wi';

interface UseWeatherCodeProps {
  iconProps?: CSSProperties;
}

export const useWeatherCode = (props?: UseWeatherCodeProps) => {
  const { t } = useTranslation();

  const getWeatherByCode = (weatherCode: number | undefined) => {
    const iconProps = {
      margin: 0,
      fontSize: '2rem',
      ...props?.iconProps,
    };

    switch (weatherCode) {
      case 0:
        return {
          name: 'clear',
          label: t('weatherCode.clear'),
          emoji: '☀️',
          icon: <WiDayHaze style={{ ...iconProps }} />,
        };

      case 1:
        return {
          name: 'mostlyClear',
          label: t('weatherCode.mostlyClear'),
          emoji: '🌤️',
          icon: <WiCloudy style={{ ...iconProps }} />,
        };

      case 2:
        return {
          name: 'partlyCloudy',
          label: t('weatherCode.partlyCloudy'),
          emoji: '⛅',
          icon: <WiDayCloudyHigh style={{ ...iconProps }} />,
        };

      case 3:
        return {
          name: 'cloudy',
          label: t('weatherCode.cloudy'),
          emoji: '☁️',
          icon: <WiCloud style={{ ...iconProps }} />,
        };

      case 45:
        return {
          name: 'fog',
          label: t('weatherCode.fog'),
          emoji: '🌫️',
          icon: <WiFog style={{ ...iconProps }} />,
        };

      case 48:
        return {
          name: 'depositingRimeFog',
          label: t('weatherCode.depositingRimeFog'),
          emoji: '🌫️',
          icon: <WiDayFog style={{ ...iconProps }} />,
        };

      case 51:
        return {
          name: 'lightDrizzle',
          label: t('weatherCode.lightDrizzle'),
          emoji: '🌦️',
          icon: <WiDaySprinkle style={{ ...iconProps }} />,
        };

      case 61:
        return {
          name: 'slightRain',
          label: t('weatherCode.slightRain'),
          emoji: '🌧️',
          icon: <WiDayHail style={{ ...iconProps }} />,
        };

      case 63:
        return {
          name: 'rain',
          label: t('weatherCode.rain'),
          emoji: '🌧️',
          icon: <WiDaySleet style={{ ...iconProps }} />,
        };

      case 71:
        return {
          name: 'slightSnowfall',
          label: t('weatherCode.slightSnowfall'),
          emoji: '🌨️',
          icon: <WiDaySnow style={{ ...iconProps }} />,
        };

      case 73:
        return {
          name: 'snowfall',
          label: t('weatherCode.snowfall'),
          emoji: '❄️',
          icon: <WiSnowflakeCold style={{ ...iconProps }} />,
        };

      case 80:
        return {
          name: 'rainShowers',
          label: t('weatherCode.rainShowers'),
          emoji: '🌦️',
          icon: <WiShowers style={{ ...iconProps }} />,
        };

      case 95:
        return {
          name: 'thunderstorm',
          label: t('weatherCode.thunderstorm'),
          emoji: '⛈️',
          icon: <WiStormShowers style={{ ...iconProps }} />,
        };

      default:
        return {
          name: 'unknown',
          label: t('label.unknown'),
          emoji: '❓',
          icon: <WiNa style={{ ...iconProps }} />,
        };
    }
  };

  return {
    getWeatherByCode,
  };
};
