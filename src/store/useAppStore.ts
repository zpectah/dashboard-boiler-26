import { create } from 'zustand';
import { merge } from 'lodash';
import type { AppFeatures, Panel, PanelEffect, UserLink } from '../types';
import {
  dateTimeWidgetHolidaysOriginKeys,
  dateTimeWidgetTimeKeys,
  panelEffectKeys,
} from '../enums';
import { getRandomId } from '../utils';

type PartialPanel = Partial<Panel> & Pick<Panel, 'id' | 'name'>;

interface IAppStore {
  editMode: boolean;
  hash: string;
  panelEffect: PanelEffect;
  homePanel: Panel;
  customPanels: Panel[];
  toggleEditMode: () => void;
  onChangeHash: (hash?: string) => void;
  onChangePanelEffect: (panelEffect: PanelEffect) => void;
  onCreatePanel: (panel: Panel) => void;
  onUpdatePanel: (panel: PartialPanel) => void;
  onDeletePanel: (id: string) => void;
  features: AppFeatures;
  setFeatures: (features: Partial<AppFeatures>) => void;
  loadTimestamp: string;
  setLoadTimestamp: (timestamp: string) => void;
  createPanelLink: (panelId: string, link: UserLink) => void;
  updatePanelLink: (panelId: string, link: UserLink) => void;
  removePanelLink: (panelId: string, linkId: string) => void;
}

const useAppStore = create<IAppStore>((set, get) => {
  const editMode = false;
  const hash = 'k2e9blGga0FL'; /* TODO: mock */
  const panelEffect: PanelEffect = panelEffectKeys.grow;
  const features: AppFeatures = {
    /* TODO: mock */
    googleLinks: true,
    msLinks: true,
    appleLinks: true,
  };
  const loadTimestamp = '2026-04-05T07:25:37.597Z'; /* TODO: mock */

  /* TODO: mock */
  const homePanel: Panel = {
    id: 'I73m0u2vt7yG',
    name: 'home',
    label: 'Home',
    isMain: true,
    widgets: {
      calendar: {
        active: true,
      },
      dateTime: {
        active: true,
        showDate: true,
        timeType: dateTimeWidgetTimeKeys.numeric,
        separatorBlink: false,
        showSeconds: true,
        showHolidays: true,
        showTomorrowHolidays: true,
        holidaysOrigin: dateTimeWidgetHolidaysOriginKeys.cs,
      },
      links: {
        active: true,
        links: [
          {
            id: 'fdg5h46fd5g4h6d',
            url: 'https://hdfghdfgh',
            label: 'Link label',
            order: 0,
          },
          {
            id: 'fdh46fdjgfhjgj6d',
            url: 'https://gfhfdghdfg',
            label: 'Link label 1',
            order: 1,
          },
        ],
      },
      weather: {
        active: true,
      },
    },
  };

  /* TODO: mock */
  const customPanels: Panel[] = [
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
          showDate: false,
          timeType: dateTimeWidgetTimeKeys.numeric,
          separatorBlink: false,
          showSeconds: false,
          showHolidays: false,
          showTomorrowHolidays: false,
          holidaysOrigin: dateTimeWidgetHolidaysOriginKeys.eu,
        },
        links: {
          active: true,
          links: [
            {
              id: 'aspdofiapsfdapso',
              url: 'https://hdfghdfgh',
              label: 'Link label',
              order: 0,
            },
          ],
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
          showDate: false,
          timeType: dateTimeWidgetTimeKeys.analog,
          separatorBlink: false,
          showSeconds: false,
          showHolidays: true,
          showTomorrowHolidays: false,
          holidaysOrigin: dateTimeWidgetHolidaysOriginKeys.eu,
        },
        links: {
          active: false,
          links: [],
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

  const setFeaturesHandler = (features: Partial<AppFeatures>) => {
    set((state) => {
      const newState = { ...state.features, ...features };

      /* TODO: save to storage */

      return { features: newState };
    });
  };

  const setLoadTimestampHandler = (timestamp: string) =>
    set({ loadTimestamp: timestamp });

  const createPanelLinkHandler = (panelId: string, link: UserLink) => {
    set((state) => {
      const isPanelHome = state.homePanel.id === panelId;

      if (isPanelHome) {
        const currentLinks = state.homePanel.widgets.links.links;

        if (currentLinks.some((item) => item.id === link.id)) return state;

        return {
          homePanel: {
            ...state.homePanel,
            widgets: {
              ...state.homePanel.widgets,
              links: {
                ...state.homePanel.widgets.links,
                links: [...currentLinks, link],
              },
            },
          },
        };
      }

      const panelExists = state.customPanels.some((p) => p.id === panelId);

      if (!panelExists) return state;

      const updatedCustomPanels = state.customPanels.map((panel) => {
        if (panel.id !== panelId) return panel;
        if (panel.widgets.links.links.some((l) => l.id === link.id))
          return panel;

        return {
          ...panel,
          widgets: {
            ...panel.widgets,
            links: {
              ...panel.widgets.links,
              links: [...panel.widgets.links.links, link],
            },
          },
        };
      });

      return {
        customPanels: updatedCustomPanels,
      };
    });
  };

  const updatePanelLinkHandler = (panelId: string, link: UserLink) => {
    const updateLinksInArray = (links: UserLink[]) =>
      links.map((l) => (l.id === link.id ? { ...l, ...link } : l));

    set((state) => {
      const isPanelHome = state.homePanel.id === panelId;

      if (isPanelHome) {
        return {
          homePanel: {
            ...state.homePanel,
            widgets: {
              ...state.homePanel.widgets,
              links: {
                ...state.homePanel.widgets.links,
                links: updateLinksInArray(state.homePanel.widgets.links.links),
              },
            },
          },
        };
      }

      return {
        customPanels: state.customPanels.map((panel) => {
          if (panel.id !== panelId) return panel;

          return {
            ...panel,
            widgets: {
              ...panel.widgets,
              links: {
                ...panel.widgets.links,
                links: updateLinksInArray(panel.widgets.links.links),
              },
            },
          };
        }),
      };
    });
  };

  const removePanelLinkHandler = (panelId: string, linkId: string) => {
    const filterLinks = (links: UserLink[]) =>
      links.filter((l) => l.id !== linkId);

    set((state) => {
      const isPanelHome = state.homePanel.id === panelId;

      if (isPanelHome) {
        return {
          homePanel: {
            ...state.homePanel,
            widgets: {
              ...state.homePanel.widgets,
              links: {
                ...state.homePanel.widgets.links,
                links: filterLinks(state.homePanel.widgets.links.links),
              },
            },
          },
        };
      }

      return {
        customPanels: state.customPanels.map((panel) => {
          if (panel.id !== panelId) return panel;

          return {
            ...panel,
            widgets: {
              ...panel.widgets,
              links: {
                ...panel.widgets.links,
                links: filterLinks(panel.widgets.links.links),
              },
            },
          };
        }),
      };
    });
  };

  return {
    editMode,
    hash,
    panelEffect,
    homePanel,
    customPanels,
    toggleEditMode: toggleEditModeHandler,
    onChangeHash: setHashHandler /* TODO #rename */,
    onChangePanelEffect: setPanelEffectHandler /* TODO #rename */,
    onCreatePanel: createPanelHandler /* TODO #rename */,
    onUpdatePanel: updatePanelHandler /* TODO #rename */,
    onDeletePanel: deletePanelHandler /* TODO #rename */,
    features,
    setFeatures: setFeaturesHandler,
    loadTimestamp,
    setLoadTimestamp: setLoadTimestampHandler /* TODO #rename */,
    createPanelLink: createPanelLinkHandler,
    updatePanelLink: updatePanelLinkHandler,
    removePanelLink: removePanelLinkHandler,
  };
});

export default useAppStore;
