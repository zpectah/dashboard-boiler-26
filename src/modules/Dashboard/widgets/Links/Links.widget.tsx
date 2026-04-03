import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { LinksWidgetProps } from '../types';

const LinksWidget = ({ active, gridProps }: LinksWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  if (!active) return null;

  return <Grid {...gridProps}>LinksWidget _ {currentPanel.id}</Grid>;
};

export default LinksWidget;
