import { Grid } from '@mui/material';
import { usePanels } from '../../../../hooks';
import { useDashboardContext } from '../../Dashboard.context';
import type { CalendarWidgetProps } from '../types';

const CalendarWidget = ({ gridProps }: CalendarWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const { getCurrentPanel } = usePanels();

  const parentPanel = getCurrentPanel(currentPanel.name) ?? currentPanel;

  if (!parentPanel.widgets.calendar) return null;

  return <Grid {...gridProps}>CalendarWidget _ {currentPanel.id}</Grid>;
};

export default CalendarWidget;
