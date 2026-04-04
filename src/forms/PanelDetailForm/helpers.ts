import type { Panel } from '../../types';
import { getRandomId } from '../../utils';
import { dateTimeWidgetTimeDefault } from '../../constants';
import type { IPanelDetailForm } from './types';

export const getDefaultValues = (): IPanelDetailForm => {
  return Object.assign({
    id: getRandomId(12),
    name: '',
    label: '',
    widgets: {
      calendar: {
        active: true,
      },
      dateTime: {
        active: true,
        type: dateTimeWidgetTimeDefault,
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
  });
};

export const getDataToForm = (panel: Panel | undefined): IPanelDetailForm => {
  return Object.assign({
    id: panel?.id,
    name: panel?.name,
    label: panel?.label,
    widgets: {
      calendar: panel?.widgets.calendar,
      dateTime: panel?.widgets.dateTime,
      holidays: panel?.widgets.holidays,
      links: panel?.widgets.links,
      weather: panel?.widgets.weather,
    },
  });
};

export const getFormToMaster = (data: IPanelDetailForm): Panel => {
  const master = Object.assign({ ...data });

  return master;
};
