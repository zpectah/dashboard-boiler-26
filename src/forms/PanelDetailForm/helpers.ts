import type { Panel } from '../../types';
import { getFormattedString, getRandomId, getSafeString } from '../../utils';
import {
  dateTimeWidgetHolidaysOriginDefault,
  dateTimeWidgetTimeDefault,
} from '../../constants';
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
        showDate: true,
        timeType: dateTimeWidgetTimeDefault,
        separatorBlink: false,
        showSeconds: false,
        showHolidays: false,
        showTomorrowHolidays: false,
        holidaysOrigin: dateTimeWidgetHolidaysOriginDefault,
      },
      links: {
        active: true,
        links: [],
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
      links: panel?.widgets.links,
      weather: panel?.widgets.weather,
    },
  });
};

export const getFormToMaster = (data: IPanelDetailForm): Panel => {
  const master = Object.assign({
    ...data,
    name: getFormattedString(data.name),
    label: getSafeString(data.label),
  });

  if (!master.widgets.links.links) {
    master.widgets.links['links'] = [];
  }

  return master;
};
