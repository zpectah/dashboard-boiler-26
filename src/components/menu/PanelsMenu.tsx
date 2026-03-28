import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { usePanels } from '../../hooks';
import { MainPanelName } from '../../constants';

const PanelsMenu = () => {
  const { panels } = usePanels();

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
    </Stack>
  );
};

export default PanelsMenu;
