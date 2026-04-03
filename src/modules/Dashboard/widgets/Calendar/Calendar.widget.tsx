import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { CalendarWidgetProps } from '../types';

const CalendarWidget = ({ active, gridProps }: CalendarWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  // TODO
  // const current = currentPanel.widgets.calendar;

  if (!active) return null;

  return <Grid {...gridProps}>CalendarWidget _ {currentPanel.id}</Grid>;
};

export default CalendarWidget;
