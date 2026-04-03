import { Grid } from '@mui/material';
import { usePanels } from '../../../../hooks';
import { useDashboardContext } from '../../Dashboard.context';
import type { LinksWidgetProps } from '../types';

const LinksWidget = ({ gridProps }: LinksWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const { getCurrentPanel } = usePanels();

  const parentPanel = getCurrentPanel(currentPanel.name) ?? currentPanel;

  if (!parentPanel.widgets.links) return null;

  return <Grid {...gridProps}>LinksWidget _ {currentPanel.id}</Grid>;
};

export default LinksWidget;
