import type { Panel } from '../types';
import { mainPanelName } from '../constants';
import { useAppStore } from '../store';

export const usePanels = () => {
  const { homePanel, customPanels } = useAppStore();

  const homePanelBase: Panel = {
    name: mainPanelName,
    ...homePanel,
  };
  const panels = [homePanelBase, ...customPanels];

  const isPanelValid = (name: string) =>
    customPanels.some((item) => item.name === name);

  const getCurrentPanel = (name?: string) => {
    if (name === undefined) return homePanel;

    return customPanels.find((item) => item.name === name);
  };

  const getPanelById = (id: string | null) =>
    panels.find((item) => item.id === id);

  return {
    panels,
    isPanelValid,
    getCurrentPanel,
    getPanelById,
  };
};
