import { useTranslation } from 'react-i18next';
import {
  Grid,
  Paper,
  Stack,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useWeather, useWeatherCode } from '../../../../hooks';
// import { useDashboardContext } from '../../Dashboard.context';
import type { WeatherWidgetProps } from '../types';

const WeatherWidget = ({ active, gridProps }: WeatherWidgetProps) => {
  const { t } = useTranslation(['common', 'feedback']);
  // const { currentPanel } = useDashboardContext();
  const { weather, error } = useWeather();
  const { getWeatherByCode } = useWeatherCode({
    iconProps: {
      fontSize: '7.25rem',
    },
  });

  // const current = currentPanel.widgets.weather;
  const currentWeather = getWeatherByCode(weather?.current_weather.weathercode);

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <Stack
          direction="column"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          {error && (
            <Alert severity="error">{t(`feedback:error.${error}`)}</Alert>
          )}
          {!weather ? (
            <Stack
              direction="column"
              gap={4}
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgress />
              {t('message.loadingWeather')}
            </Stack>
          ) : (
            <Stack direction="column" gap={2} sx={{ py: 4 }}>
              <Stack direction="row" gap={2}>
                {currentWeather.icon}
                <Stack
                  direction="column"
                  gap={0.5}
                  alignItems="flex-start"
                  justifyContent="center"
                >
                  <Typography variant="h4">
                    {weather.current_weather.temperature}
                    &nbsp;
                    {weather.current_weather_units.temperature}
                  </Typography>
                  <Typography>{currentWeather.label}</Typography>
                </Stack>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Paper>
    </Grid>
  );
};

export default WeatherWidget;
