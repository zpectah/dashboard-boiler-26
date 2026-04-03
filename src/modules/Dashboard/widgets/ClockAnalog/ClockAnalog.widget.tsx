import { Grid } from '@mui/material';
import { usePanels } from '../../../../hooks';
import { useDashboardContext } from '../../Dashboard.context';
import type { ClockAnalogWidgetProps } from '../types';

const ClockAnalogWidget = ({ gridProps }: ClockAnalogWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const { getCurrentPanel } = usePanels();

  const parentPanel = getCurrentPanel(currentPanel.name) ?? currentPanel;

  if (!parentPanel.widgets.clockAnalog) return null;

  return <Grid {...gridProps}>ClockAnalogWidget _ {currentPanel.id}</Grid>;
};

export default ClockAnalogWidget;
