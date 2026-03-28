import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { ClockAnalogWidgetProps } from '../types';

const ClockAnalogWidget = ({ gridProps }: ClockAnalogWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  if (!currentPanel.widgets.clockAnalog) return null;

  return <Grid {...gridProps}>ClockAnalogWidget _ {currentPanel.id}</Grid>;
};

export default ClockAnalogWidget;
