import { PanelContent } from '../../components';
import { usePanelsStore } from '../../store';

const MainPanel = () => {
  const { main } = usePanelsStore();

  return <PanelContent panel={main} />;
};

export default MainPanel;
