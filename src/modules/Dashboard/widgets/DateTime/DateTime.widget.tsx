import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { DateTimeWidgetProps } from '../types';

const DateTimeWidget = ({ gridProps }: DateTimeWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  if (!currentPanel.widgets.dateTime) return null;

  return <Grid {...gridProps}>DateTimeWidget _ {currentPanel.id}</Grid>;
};

export default DateTimeWidget;
