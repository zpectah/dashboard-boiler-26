import { useAppStore } from '../store';

export const usePanels = () => {
  const { homePanel, customPanels, panels } = useAppStore();

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
