import { create } from 'zustand';
import type { Panel, PanelEffect } from '../types';
import { panelEffectKeys } from '../enums';

type HomePanel = Omit<Panel, 'name' | 'label'>;
type PartialPanel = Partial<Panel> & Pick<Panel, 'id' | 'name'>;

interface IAppStore {
  // States
  panelEffect: PanelEffect;
  homePanel: HomePanel;
  customPanels: Panel[];
  // Handlers
  onChangePanelEffect: (panelEffect: PanelEffect) => void;
  onCreatePanel: (panel: Panel) => void;
  onUpdatePanel: (panel: PartialPanel) => void;
  onDeletePanel: (id: string) => void;
}

const useAppStore = create<IAppStore>((set, getState) => {
  const panelEffect: PanelEffect = panelEffectKeys.slide;

  const homePanel: Omit<Panel, 'name' | 'label'> = {
    id: 'df5g4h6d5f',
    widgets: {
      calendar: true,
      clockAnalog: true,
      clockNumeric: true,
      dateTime: true,
      holidays: true,
      links: true,
      weather: true,
    },
  };

  const customPanels: Panel[] = [
    /* TODO: mock */
    {
      id: 'rt21zr2',
      name: 'panel-2',
      label: 'Panel 2',
      widgets: {
        calendar: false,
        clockAnalog: true,
        clockNumeric: true,
        dateTime: true,
        holidays: true,
        links: false,
        weather: true,
      },
    },
    {
      id: 'bvn849v8b',
      name: 'panel-3',
      label: 'Panel Three',
      widgets: {
        calendar: true,
        clockAnalog: false,
        clockNumeric: false,
        dateTime: false,
        holidays: false,
        links: true,
        weather: false,
      },
    },
  ];

  const setPanelEffect = (panelEffect: PanelEffect) => {
    set({ panelEffect });

    /* TODO: save to storage */
  };

  const createPanelHandler = (panel: Panel) => {};

  const updatePanelHandler = (panel: PartialPanel) => {
    if (!panel.id || !panel.name) return;

    if (panel.name === 'home') {
      const state = getState().homePanel;

      set({ homePanel: Object.assign(state, panel) });

      /* TODO: save to storage */
    } else {
      const state = getState().customPanels;

      const index = state.findIndex((item) => item.id === panel.id);

      console.log('found index', index);

      /* TODO: save to storage */
    }
  };

  const deletePanelHandler = (id: string) => {};

  return {
    // States
    panelEffect,
    homePanel,
    customPanels,
    // Handlers
    onChangePanelEffect: setPanelEffect,
    onCreatePanel: createPanelHandler,
    onUpdatePanel: updatePanelHandler,
    onDeletePanel: deletePanelHandler,
  };
});

export default useAppStore;
