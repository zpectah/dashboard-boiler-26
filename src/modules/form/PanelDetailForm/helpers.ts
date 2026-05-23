import type { Panel } from '@/types';
import { getRandomId } from '@/utils';
import { panelWidgetDefaults } from '@/constants';
import type { IPanelDetailForm } from './types';

export const getDefaultValues = (): IPanelDetailForm => {
  return Object.assign({
    id: getRandomId(8),
    label: '',
    widgets: {
      ...panelWidgetDefaults,
    },
  });
};

export const parseObjectValues = (data: Panel): IPanelDetailForm => {
  return Object.assign({
    id: data.id,
    label: data.label,
    widgets: {
      datetime: {
        ...panelWidgetDefaults.datetime,
        ...data.widgets.datetime,
      },
      calendar: {
        ...panelWidgetDefaults.calendar,
        ...data.widgets.calendar,
      },
      links: {
        ...panelWidgetDefaults.links,
        ...data.widgets.links,
      },
      search: {
        ...panelWidgetDefaults.search,
        ...data.widgets?.search,
      },
    },
  });
};

export const parseMasterData = (data: IPanelDetailForm): Panel => {
  const master = {
    id: data.id,
    label: data.label,
    widgets: {
      datetime: {
        ...panelWidgetDefaults.datetime,
        ...data.widgets.datetime,
      },
      calendar: {
        ...panelWidgetDefaults.calendar,
        ...data.widgets.calendar,
      },
      links: {
        ...panelWidgetDefaults.links,
        ...data.widgets.links,
      },
      search: {
        ...panelWidgetDefaults.search,
        ...data.widgets?.search,
      },
    },
  };

  return Object.assign(master);
};
