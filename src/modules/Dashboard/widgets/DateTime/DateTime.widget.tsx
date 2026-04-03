import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { DateTimeWidgetProps } from '../types';

const DateTimeWidget = ({ gridProps }: DateTimeWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  console.log('DateTimeWidget', currentPanel.widgets.dateTime);

  if (!currentPanel.widgets.dateTime) return null;

  return (
    <Grid {...gridProps}>
      DateTimeWidget _ {currentPanel.id} _{' '}
      {currentPanel.widgets.dateTime ? 'ACTIVE' : 'x'}
    </Grid>
  );
};

export default DateTimeWidget;
