import { Grid } from '@mui/material';
import { usePanels } from '../../../../hooks';
import { useDashboardContext } from '../../Dashboard.context';
import type { HolidaysWidgetProps } from '../types';

const HolidaysWidget = ({ gridProps }: HolidaysWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const { getCurrentPanel } = usePanels();

  const parentPanel = getCurrentPanel(currentPanel.name) ?? currentPanel;

  if (!parentPanel.widgets.holidays) return null;

  return <Grid {...gridProps}>HolidaysWidget _ {currentPanel.id}</Grid>;
};

export default HolidaysWidget;
