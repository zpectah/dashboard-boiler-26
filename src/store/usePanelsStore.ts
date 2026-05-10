import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { merge } from 'lodash';
import type { Panel, UserLink } from '@/types';
import { mainPanelId, panelStorageKey, panelWidgetDefaults } from '@/constants';

interface IPanelStore {
  main: Panel;
  custom: Panel[];
  onPanelCreate: (panel: Panel) => void;
  onPanelPatch: (id: string, panel: Panel) => void;
  onPanelDelete: (id: string) => void;
  onLinkCreate: (panelId: string, link: UserLink) => void;
  onLinkPatch: (panelId: string, link: UserLink) => void;
  onLinkDelete: (panelId: string, linkId: string) => void;
}

const usePanelsStore = create<IPanelStore>()(
  persist(
    (set) => {
      const main: Panel = {
        id: mainPanelId,
        label: 'Main',
        widgets: Object.assign(panelWidgetDefaults),
      };
      const custom: Panel[] = [];

      const createPanelHandler = (panel: Panel) => {
        set((state) => {
          const newState = [...state.custom, panel];

          return { custom: newState };
        });
      };

      const patchPanelHandler = (id: string, panel: Panel) => {
        if (!id) return;

        if (id === mainPanelId) {
          set((state) => {
            const newState = merge({}, state.main, panel);

            return { main: newState };
          });
        } else {
          set((state) => {
            const newState = state.custom.map((item) =>
              item.id === id ? merge({}, item, panel) : item,
            );

            return { custom: newState };
          });
        }
      };

      const deletePanelHandler = (id: string) => {
        set((state) => {
          const newState = state.custom.filter((panel) => panel.id !== id);

          return { custom: newState };
        });
      };

      const createLinkHandler = (panelId: string, link: UserLink) => {
        if (!panelId) return;

        if (panelId === mainPanelId) {
          set((state) => ({
            main: {
              ...state.main,
              widgets: {
                ...state.main.widgets,
                links: {
                  ...state.main.widgets.links,
                  links: [...state.main.widgets.links.links, link],
                },
              },
            },
          }));
        } else {
          set((state) => ({
            custom: state.custom.map((panel) =>
              panel.id === panelId
                ? {
                    ...panel,
                    widgets: {
                      ...panel.widgets,
                      links: {
                        ...panel.widgets.links,
                        links: [...panel.widgets.links.links, link],
                      },
                    },
                  }
                : panel,
            ),
          }));
        }
      };

      const patchLinkHandler = (panelId: string, link: UserLink) => {
        if (!panelId || !link.id) return;

        if (panelId === mainPanelId) {
          set((state) => ({
            main: {
              ...state.main,
              widgets: {
                ...state.main.widgets,
                links: {
                  ...state.main.widgets.links,
                  links: state.main.widgets.links.links.map((item) =>
                    item.id === link.id ? { ...item, ...link } : item,
                  ),
                },
              },
            },
          }));
        } else {
          set((state) => ({
            custom: state.custom.map((panel) =>
              panel.id === panelId
                ? {
                    ...panel,
                    widgets: {
                      ...panel.widgets,
                      links: {
                        ...panel.widgets.links,
                        links: panel.widgets.links.links.map((item) =>
                          item.id === link.id ? { ...item, ...link } : item,
                        ),
                      },
                    },
                  }
                : panel,
            ),
          }));
        }
      };

      const deleteLinkHandler = (panelId: string, linkId: string) => {
        if (!panelId || !linkId) return;

        if (panelId === mainPanelId) {
          set((state) => ({
            main: {
              ...state.main,
              widgets: {
                ...state.main.widgets,
                links: {
                  ...state.main.widgets.links,
                  links: state.main.widgets.links.links.filter(
                    (link) => link.id !== linkId,
                  ),
                },
              },
            },
          }));
        } else {
          set((state) => ({
            custom: state.custom.map((panel) =>
              panel.id === panelId
                ? {
                    ...panel,
                    widgets: {
                      ...panel.widgets,
                      links: {
                        ...panel.widgets.links,
                        links: panel.widgets.links.links.filter(
                          (link) => link.id !== linkId,
                        ),
                      },
                    },
                  }
                : panel,
            ),
          }));
        }
      };

      return {
        main,
        custom,
        onPanelCreate: createPanelHandler,
        onPanelPatch: patchPanelHandler,
        onPanelDelete: deletePanelHandler,
        onLinkCreate: createLinkHandler,
        onLinkPatch: patchLinkHandler,
        onLinkDelete: deleteLinkHandler,
      };
    },
    {
      name: panelStorageKey,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default usePanelsStore;
