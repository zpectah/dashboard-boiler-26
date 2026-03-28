import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { ClockNumericWidgetProps } from '../types';

const ClockNumericWidget = ({ gridProps }: ClockNumericWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  if (!currentPanel.widgets.clockNumeric) return null;

  return (
    <Grid {...gridProps}>
      ClockNumericWidget _ {currentPanel.id} _ {currentPanel.name}
    </Grid>
  );
};

export default ClockNumericWidget;
