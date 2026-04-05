import type { Panel } from '../../types';
import { DirectionKeys } from './enums';
import {
  dateTimeWidgetHolidaysOriginDefault,
  dateTimeWidgetTimeDefault,
} from '../../constants';

export const panelDirectionDefault = DirectionKeys.left;

/** Just for temporary moment in context, before home panel is set */
export const dashboardDefaultPanel: Panel = {
  id: '00000000',
  name: 'default',
  label: '',
  widgets: {
    calendar: {
      active: false,
    },
    dateTime: {
      active: false,
      showDate: false,
      timeType: dateTimeWidgetTimeDefault,
      separatorBlink: false,
      showSeconds: false,
      showHolidays: false,
      showTomorrowHolidays: false,
      holidaysOrigin: dateTimeWidgetHolidaysOriginDefault,
    },
    links: {
      active: false,
      links: [],
    },
    weather: {
      active: false,
    },
  },
};
