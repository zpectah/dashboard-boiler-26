import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { WeatherWidgetProps } from '../types';

const WeatherWidget = ({ gridProps }: WeatherWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  if (!currentPanel.widgets.weather) return null;

  return <Grid {...gridProps}>WeatherWidget _ {currentPanel.id}</Grid>;
};

export default WeatherWidget;
