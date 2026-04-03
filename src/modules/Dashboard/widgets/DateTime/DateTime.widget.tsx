import { Grid } from '@mui/material';
import { usePanels } from '../../../../hooks';
import { useDashboardContext } from '../../Dashboard.context';
import type { DateTimeWidgetProps } from '../types';

const DateTimeWidget = ({ gridProps }: DateTimeWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const { getCurrentPanel } = usePanels();

  const parentPanel = getCurrentPanel(currentPanel.name) ?? currentPanel;

  if (!parentPanel.widgets.dateTime) return null;

  return <Grid {...gridProps}>DateTimeWidget _ {currentPanel.id}</Grid>;
};

export default DateTimeWidget;
