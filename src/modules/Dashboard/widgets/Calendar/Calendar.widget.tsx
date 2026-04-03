import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { CalendarWidgetProps } from '../types';

const CalendarWidget = ({ gridProps }: CalendarWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  console.log('CalendarWidget', currentPanel.widgets.calendar);

  if (!currentPanel.widgets.calendar) return null;

  return (
    <Grid {...gridProps}>
      CalendarWidget _ {currentPanel.id} _{' '}
      {currentPanel.widgets.calendar ? 'ACTIVE' : 'x'}
    </Grid>
  );
};

export default CalendarWidget;
