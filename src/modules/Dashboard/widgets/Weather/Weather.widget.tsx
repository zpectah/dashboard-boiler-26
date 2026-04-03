import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { WeatherWidgetProps } from '../types';

const WeatherWidget = ({ active, gridProps }: WeatherWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  if (!active) return null;

  return <Grid {...gridProps}>WeatherWidget _ {currentPanel.id}</Grid>;
};

export default WeatherWidget;
