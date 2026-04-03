import { Grid } from '@mui/material';
import { usePanels } from '../../../../hooks';
import { useDashboardContext } from '../../Dashboard.context';
import type { ClockNumericWidgetProps } from '../types';

const ClockNumericWidget = ({ gridProps }: ClockNumericWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const { getCurrentPanel } = usePanels();

  const parentPanel = getCurrentPanel(currentPanel.name) ?? currentPanel;

  if (!parentPanel.widgets.clockNumeric) return null;

  return <Grid {...gridProps}>ClockNumericWidget _ {currentPanel.id}</Grid>;
};

export default ClockNumericWidget;
