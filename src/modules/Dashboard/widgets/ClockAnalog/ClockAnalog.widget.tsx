import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { ClockAnalogWidgetProps } from '../types';

const ClockAnalogWidget = ({ gridProps }: ClockAnalogWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  console.log('ClockAnalogWidget', currentPanel.widgets.clockAnalog);

  if (!currentPanel.widgets.clockAnalog) return null;

  return (
    <Grid {...gridProps}>
      ClockAnalogWidget _ {currentPanel.id} _{' '}
      {currentPanel.widgets.clockAnalog ? 'ACTIVE' : 'x'}
    </Grid>
  );
};

export default ClockAnalogWidget;
