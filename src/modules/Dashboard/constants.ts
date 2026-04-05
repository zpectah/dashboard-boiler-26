import type { Panel } from '../../types';
import {
  dateTimeWidgetHolidaysOriginDefault,
  dateTimeWidgetTimeDefault,
} from '../../constants';
import { DirectionKeys } from './enums';

export const panelDirectionDefault = DirectionKeys.left;

/** Just for temporary moment in context, before home panel is set */
export const dashboardDefaultPanel: Panel = {
  id: 'j3ONF0nJoC05',
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
