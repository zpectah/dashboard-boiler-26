import { useTranslation } from 'react-i18next';
import {
  Stack,
  Typography,
  Alert,
  CircularProgress,
  Tooltip,
} from '@mui/material';
import { useWeather, useWeatherIcon } from '@/hooks';

const WeatherSnippet = () => {
  const { t } = useTranslation();
  const { weather, locationName, error } = useWeather();
  const { getWeatherByCode } = useWeatherIcon({
    iconProps: {
      fontSize: '4.75rem',
    },
  });

  const currentWeather = getWeatherByCode(weather?.current_weather.weathercode);

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {error && <Alert severity="error">{t(`feedback.error.${error}`)}</Alert>}
      {!weather ? (
        <Stack
          direction="column"
          spacing={4}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
          {t('feedback.info.weather_loading')}
        </Stack>
      ) : (
        <Stack direction="column" spacing={1} sx={{ py: 2 }}>
          <Stack direction="row" spacing={2}>
            <Tooltip title={currentWeather.label}>
              {currentWeather.icon}
            </Tooltip>
            <Stack
              direction="column"
              sx={{
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            >
              <Stack direction="row" spacing={0.5}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '2rem',
                    fontWeight: 500,
                    margin: 0,
                    padding: 0,
                    lineHeight: 1,
                  }}
                >
                  {weather.current_weather.temperature}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ margin: 0, padding: 0, lineHeight: 1 }}
                >
                  {weather.current_weather_units.temperature}
                </Typography>
              </Stack>
              <Typography color="textSecondary" sx={{ fontSize: '1.25rem' }}>
                {locationName ?? '...'}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default WeatherSnippet;
