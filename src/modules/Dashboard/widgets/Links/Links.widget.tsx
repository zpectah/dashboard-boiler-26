import { Box, Grid, Paper } from '@mui/material';
import { useDashboardContext } from '../../Dashboard.context';
import type { LinksWidgetProps } from '../types';

const LinksWidget = ({ active, gridProps }: LinksWidgetProps) => {
  const { currentPanel } = useDashboardContext();

  // TODO
  // const current = currentPanel.widgets.links;

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <Box>LinksWidget _ {currentPanel.id}</Box>
      </Paper>
    </Grid>
  );
};

export default LinksWidget;
