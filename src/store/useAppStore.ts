import { create } from 'zustand';
import type { Panel, PanelEffect } from '../types';
import { panelEffectKeys } from '../enums';
import { getRandomId } from '../utils';

type HomePanel = Omit<Panel, 'name'>;
type PartialPanel = Partial<Panel> & Pick<Panel, 'id' | 'name'>;

interface IAppStore {
  // States
  hash: string;
  panelEffect: PanelEffect;
  homePanel: HomePanel;
  customPanels: Panel[];
  // Handlers
  onChangeHash: (hash?: string) => void;
  onChangePanelEffect: (panelEffect: PanelEffect) => void;
  onCreatePanel: (panel: Panel) => void;
  onUpdatePanel: (panel: PartialPanel) => void;
  onDeletePanel: (id: string) => void;
}

const useAppStore = create<IAppStore>((set, get) => {
  const hash = 'na';
  const panelEffect: PanelEffect = panelEffectKeys.grow;

  /* TODO: mock */
  const homePanel: HomePanel = {
    id: 'I73m0u2vt7yG',
    label: 'Home',
    isMain: true,
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
      id: 'j3ONF0nJoC05',
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
      id: 'eeRs5UH53dPP',
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

  const setPanelEffectHandler = (panelEffect: PanelEffect) => {
    set({ panelEffect });

    /* TODO: save to storage */
  };

  const setHashHandler = (hash?: string) => {
    const newHash = hash ? hash : getRandomId(8);

    set({ hash: newHash });
  };

  const createPanelHandler = (panel: Panel) => {
    const state = get().customPanels;

    set(() => {
      const newState = [...state, panel];

      /* TODO: save to storage */

      return { customPanels: newState };
    });
  };

  const updatePanelHandler = (panel: PartialPanel) => {
    if (!panel.id || !panel.name) return;

    if (panel.name === 'home') {
      set((state) => {
        const newState = { ...state.homePanel, ...panel };

        /* TODO: save to storage */

        return {
          homePanel: newState,
        };
      });
    } else {
      set((state) => {
        const newState = state.customPanels.map((item) =>
          item.id === panel.id ? ({ ...item, ...panel } as Panel) : item,
        );

        /* TODO: save to storage */

        return {
          customPanels: newState,
        };
      });
    }
  };

  const deletePanelHandler = (id: string) => {
    set((state) => {
      const newState = state.customPanels.filter((panel) => panel.id !== id);

      /* TODO: save to storage */

      return { customPanels: newState };
    });
  };

  return {
    // States
    hash,
    panelEffect,
    homePanel,
    customPanels,
    // Handlers
    onChangeHash: setHashHandler,
    onChangePanelEffect: setPanelEffectHandler,
    onCreatePanel: createPanelHandler,
    onUpdatePanel: updatePanelHandler,
    onDeletePanel: deletePanelHandler,
  };
});

export default useAppStore;
