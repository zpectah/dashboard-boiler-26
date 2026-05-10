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
    ...data,
  });
};

export const parseMasterData = (data: IPanelDetailForm): Panel => {
  const master = Object.assign({
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
    },
  });

  return master;
};
