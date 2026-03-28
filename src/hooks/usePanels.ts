import type { Panel } from '../types';
import { MainPanelName } from '../constants';

export const usePanels = () => {
  // TODO: from storage
  const homePanel: Panel = {
    id: 'd6f5g4d',
    name: MainPanelName,
    label: 'Home',
    content: {
      /* TODO: tbd */
    },
  };
  // TODO: from storage (user defined)
  const panelsMock: Panel[] = [
    {
      id: 'rt21zr2',
      name: 'panel-2',
      label: 'Panel 2',
      content: {
        /* TODO: tbd */
      },
    },
    {
      id: 'bvn849v8b',
      name: 'panel-3',
      label: 'Panel Three',
      content: {
        /* TODO: tbd */
      },
    },
  ];

  const isPanelValid = (name: string) =>
    panelsMock.some((item) => item.name === name);

  const getCurrentPanel = (name?: string) => {
    if (name === undefined) return homePanel;

    return panelsMock.find((item) => item.name === name);
  };

  return {
    panels: [homePanel, ...panelsMock],
    isPanelValid,
    getCurrentPanel,
  };
};
