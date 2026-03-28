import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { usePanels } from '../../hooks';
import { MainPanelName } from '../../constants';
import { useDialogStore } from '../../store';

const PanelsMenu = () => {
  const { panels } = usePanels();
  const { onOpenPanelDialog } = useDialogStore();

  return (
    <Stack direction="row" gap={2}>
      {panels.map(({ id, name, label }) => {
        const path = name === MainPanelName ? '/' : `/${name}`;
        const linkLabel = label ? label : name;

        return (
          <Typography key={id} component={Link} to={path}>
            {linkLabel}
          </Typography>
        );
      })}

      <Typography variant="button" onClick={() => onOpenPanelDialog('new')}>
        + New
      </Typography>
    </Stack>
  );
};

export default PanelsMenu;
