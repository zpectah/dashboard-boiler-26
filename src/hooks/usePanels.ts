import type { Panel } from '../types';
import { MainPanelName } from '../constants';

export const usePanels = () => {
  // TODO: from storage
  const homePanel: Panel = {
    id: 'd6f5g4d',
    name: MainPanelName,
    label: 'Home',
    widgets: {
      /* TODO: tbd */
      calendar: true,
      clockAnalog: true,
      clockNumeric: true,
      dateTime: true,
      holidays: true,
      links: true,
    },
  };
  // TODO: from storage (user defined)
  const panelsMock: Panel[] = [
    {
      id: 'rt21zr2',
      name: 'panel-2',
      label: 'Panel 2',
      widgets: {
        /* TODO: tbd */
        calendar: false,
        clockAnalog: true,
        clockNumeric: true,
        dateTime: true,
        holidays: true,
        links: false,
      },
    },
    {
      id: 'bvn849v8b',
      name: 'panel-3',
      label: 'Panel Three',
      widgets: {
        /* TODO: tbd */
        calendar: true,
        clockAnalog: false,
        clockNumeric: false,
        dateTime: false,
        holidays: false,
        links: true,
      },
    },
  ];

  const isPanelValid = (name: string) =>
    panelsMock.some((item) => item.name === name);

  const getCurrentPanel = (name?: string) => {
    if (name === undefined) return homePanel;

    return panelsMock.find((item) => item.name === name);
  };

  const getPanelById = (id: string) =>
    panelsMock.find((item) => item.id === id);

  return {
    panels: [homePanel, ...panelsMock],
    isPanelValid,
    getCurrentPanel,
    getPanelById,
  };
};
