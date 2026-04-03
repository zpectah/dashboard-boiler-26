import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { DateTimeWidgetProps } from '../types';

const DateTimeWidget = ({ active, gridProps }: DateTimeWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  const current = currentPanel.widgets.dateTime;

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      DateTimeWidget _ {currentPanel.id} _ {current.type} /{' '}
      {current.blinkingSemi ? 'blink' : 'N'}
    </Grid>
  );
};

export default DateTimeWidget;
