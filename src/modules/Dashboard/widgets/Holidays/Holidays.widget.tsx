import { Box, Grid, Paper } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { HolidaysWidgetProps } from '../types';

const HolidaysWidget = ({ active, gridProps }: HolidaysWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  // TODO
  // const current = currentPanel.widgets.holidays;

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <Box>HolidaysWidget _ {currentPanel.id}</Box>
      </Paper>
    </Grid>
  );
};

export default HolidaysWidget;
