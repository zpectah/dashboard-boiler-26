import type { Panel } from '../types';
import { MainPanelName } from '../constants';
import { useAppStore } from '../store';

export const usePanels = () => {
  const { homePanel, customPanels } = useAppStore();

  const homePanelBase: Panel = {
    id: homePanel.id,
    name: MainPanelName,
    label: 'Home',
    widgets: homePanel.widgets,
  };

  const isPanelValid = (name: string) =>
    customPanels.some((item) => item.name === name);

  const getCurrentPanel = (name?: string) => {
    if (name === undefined) return homePanel;

    return customPanels.find((item) => item.name === name);
  };

  const getPanelById = (id: string) =>
    customPanels.find((item) => item.id === id);

  return {
    panels: [homePanelBase, ...customPanels],
    isPanelValid,
    getCurrentPanel,
    getPanelById,
  };
};
