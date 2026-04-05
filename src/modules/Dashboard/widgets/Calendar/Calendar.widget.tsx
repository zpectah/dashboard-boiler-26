import { Box, Grid, Paper } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { CalendarWidgetProps } from '../types';

const CalendarWidget = ({ active, gridProps }: CalendarWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  // TODO
  // const current = currentPanel.widgets.calendar;

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <Box>CalendarWidget _ {currentPanel.id}</Box>
      </Paper>
    </Grid>
  );
};

export default CalendarWidget;
