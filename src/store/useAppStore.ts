import { create } from 'zustand';
import { merge } from 'lodash';
import type { Panel, PanelEffect } from '../types';
import { dateTimeWidgetTimeKeys, panelEffectKeys } from '../enums';
import { getRandomId } from '../utils';

type HomePanel = Omit<Panel, 'name'>;
type PartialPanel = Partial<Panel> & Pick<Panel, 'id' | 'name'>;

interface IAppStore {
  editMode: boolean;
  hash: string;
  panelEffect: PanelEffect;
  homePanel: HomePanel;
  customPanels: Panel[];
  toggleEditMode: () => void;
  onChangeHash: (hash?: string) => void;
  onChangePanelEffect: (panelEffect: PanelEffect) => void;
  onCreatePanel: (panel: Panel) => void;
  onUpdatePanel: (panel: PartialPanel) => void;
  onDeletePanel: (id: string) => void;
}

const useAppStore = create<IAppStore>((set, get) => {
  const editMode = false;
  const hash = 'na';
  const panelEffect: PanelEffect = panelEffectKeys.grow;

  /* TODO: mock */
  const homePanel: HomePanel = {
    id: 'I73m0u2vt7yG',
    label: 'Home',
    isMain: true,
    widgets: {
      calendar: {
        active: true,
      },
      dateTime: {
        active: true,
        type: dateTimeWidgetTimeKeys.analog,
        blinkingSemi: false,
      },
      holidays: {
        active: true,
        showTomorrow: true,
      },
      links: {
        active: true,
      },
      weather: {
        active: true,
      },
    },
  };

  const customPanels: Panel[] = [
    /* TODO: mock */
    {
      id: 'j3ONF0nJoC05',
      name: 'panel-2',
      label: 'Panel 2',
      widgets: {
        calendar: {
          active: false,
        },
        dateTime: {
          active: false,
          type: dateTimeWidgetTimeKeys.numeric,
          blinkingSemi: false,
        },
        holidays: {
          active: true,
          showTomorrow: true,
        },
        links: {
          active: true,
        },
        weather: {
          active: false,
        },
      },
    },
    {
      id: 'eeRs5UH53dPP',
      name: 'panel-3',
      label: 'Panel Three',
      widgets: {
        calendar: {
          active: true,
        },
        dateTime: {
          active: true,
          type: dateTimeWidgetTimeKeys.none,
          blinkingSemi: false,
        },
        holidays: {
          active: false,
          showTomorrow: true,
        },
        links: {
          active: false,
        },
        weather: {
          active: false,
        },
      },
    },
  ];

  const toggleEditModeHandler = () =>
    set((state) => ({ editMode: !state.editMode }));

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

    console.log('*** panel to update', panel);

    if (panel.name === 'home') {
      set((state) => {
        const newState = merge(state.homePanel, panel);

        /* TODO: save to storage */

        return {
          homePanel: newState,
        };
      });
    } else {
      set((state) => {
        const newState = state.customPanels.map((item) =>
          item.id === panel.id ? merge(item, panel) : item,
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
    editMode,
    hash,
    panelEffect,
    homePanel,
    customPanels,
    toggleEditMode: toggleEditModeHandler,
    onChangeHash: setHashHandler,
    onChangePanelEffect: setPanelEffectHandler,
    onCreatePanel: createPanelHandler,
    onUpdatePanel: updatePanelHandler,
    onDeletePanel: deletePanelHandler,
  };
});

export default useAppStore;
