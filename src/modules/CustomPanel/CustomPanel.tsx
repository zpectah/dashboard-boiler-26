import { useParams } from 'react-router-dom';
import { Alert } from '@mui/material';
import { PanelContent } from '../../components';
import { usePanelsStore } from '../../store';

const CustomPanel = () => {
  const { panel } = useParams();
  const { custom } = usePanelsStore();

  const currentPanel = custom.find((item) => item.id === panel);

  if (!currentPanel) return <Alert severity="error">No panel found</Alert>;

  return <PanelContent panel={currentPanel} />;
};

export default CustomPanel;
