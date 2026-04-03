import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { ClockNumericWidgetProps } from '../types';

const ClockNumericWidget = ({ gridProps }: ClockNumericWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  console.log('ClockNumericWidget', currentPanel.widgets.clockNumeric);

  if (!currentPanel.widgets.clockNumeric) return null;

  return (
    <Grid {...gridProps}>
      ClockNumericWidget _ {currentPanel.id} _ {currentPanel.name} _{' '}
      {currentPanel.widgets.clockNumeric ? 'ACTIVE' : 'x'}
    </Grid>
  );
};

export default ClockNumericWidget;
