import { Box, Grid, Paper } from '@mui/material';
import { useAppStore, useDialogStore } from '../../../../store';
import { IconButtonPlus } from '../../../../components';
import { useDashboardContext } from '../../Dashboard.context';
import type { LinksWidgetProps } from '../types';
import { usePanels } from '../../../../hooks';

const LinksWidget = ({ active, gridProps }: LinksWidgetProps) => {
  const { removePanelLink } = useAppStore();
  const { openLinkDetailDialog } = useDialogStore();
  const {
    currentPanel: { id },
  } = useDashboardContext();
  const { getPanelById } = usePanels();

  // TODO
  // const current = currentPanel.widgets.links;
  const current = getPanelById(id);

  if (!active) return null;

  return (
    <Grid {...gridProps}>
      <Paper>
        <Box>
          <ul>
            {current?.widgets.links.links.map((link, index) => (
              <li key={index}>
                {link.label}
                <button
                  type="button"
                  onClick={() => removePanelLink(id, link.id)}
                >
                  remove
                </button>
                <button
                  type="button"
                  onClick={() => openLinkDetailDialog(link.id)}
                >
                  edit
                </button>
              </li>
            ))}
          </ul>
        </Box>
        <IconButtonPlus
          tooltip="New link"
          onClick={() => openLinkDetailDialog('new')}
        >
          +
        </IconButtonPlus>
      </Paper>
    </Grid>
  );
};

export default LinksWidget;
