import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { CalendarWidgetProps } from '../types';

const CalendarWidget = ({ gridProps }: CalendarWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  if (!currentPanel.widgets.calendar) return null;

  return <Grid {...gridProps}>CalendarWidget _ {currentPanel.id}</Grid>;
};

export default CalendarWidget;
