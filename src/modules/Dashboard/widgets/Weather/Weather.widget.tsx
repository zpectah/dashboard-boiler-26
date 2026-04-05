import { Box, Grid, Paper } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { WeatherWidgetProps } from '../types';

const WeatherWidget = ({ active, gridProps }: WeatherWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  // TODO
  // const current = currentPanel.widgets.weather;

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <Box>WeatherWidget _ {currentPanel.id}</Box>
      </Paper>
    </Grid>
  );
};

export default WeatherWidget;
