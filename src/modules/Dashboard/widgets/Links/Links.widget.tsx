import { Grid, Paper } from '@mui/material';
import { usePanels } from '../../../../hooks';
import { useDashboardContext } from '../../Dashboard.context';
import type { LinksWidgetProps } from '../types';
import LinksList from './LinksList';

const LinksWidget = ({ active, gridProps }: LinksWidgetProps) => {
  const { currentPanel } = useDashboardContext();
  const { getPanelById } = usePanels();

  const current = getPanelById(currentPanel.id);

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <LinksList
          panelId={currentPanel.id}
          links={current?.widgets.links.links}
        />
      </Paper>
    </Grid>
  );
};

export default LinksWidget;
