import {
  datetimeWidgetHolidaysOriginDefault,
  datetimeWidgetTypeDefault,
} from './widgets';

export const panelWidgetObjectBase = {
  active: true,
};

export const panelWidgetDefaults = {
  datetime: {
    ...panelWidgetObjectBase,
    type: datetimeWidgetTypeDefault,
    date: true,
    fullDate: false,
    weekDay: true,
    seconds: false,
    secondsBlink: true,
    weather: true,
    holidays: true,
    tomorrowHolidays: true,
    holidaysOrigin: datetimeWidgetHolidaysOriginDefault,
  },
  calendar: {
    ...panelWidgetObjectBase,
  },
  links: {
    ...panelWidgetObjectBase,
    links: [],
  },
};
