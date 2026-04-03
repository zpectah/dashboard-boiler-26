import { Grid } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { LinksWidgetProps } from '../types';

const LinksWidget = ({ gridProps }: LinksWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  console.log('LinksWidget', currentPanel.widgets.links);

  if (!currentPanel.widgets.links) return null;

  return (
    <Grid {...gridProps}>
      LinksWidget _ {currentPanel.id} _{' '}
      {currentPanel.widgets.links ? 'ACTIVE' : 'x'}
    </Grid>
  );
};

export default LinksWidget;
