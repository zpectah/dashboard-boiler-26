import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { WeatherWidgetProps } from '../types';

const WeatherWidget = ({ gridProps }: WeatherWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  console.log('WeatherWidget', currentPanel.widgets.weather);

  if (!currentPanel.widgets.weather) return null;

  return (
    <Grid {...gridProps}>
      WeatherWidget _ {currentPanel.id} _{' '}
      {currentPanel.widgets.weather ? 'ACTIVE' : 'x'}
    </Grid>
  );
};

export default WeatherWidget;
