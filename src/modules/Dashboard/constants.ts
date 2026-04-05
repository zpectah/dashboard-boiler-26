import type { Panel } from '../../types';
import { DirectionKeys } from './enums';
import { dateTimeWidgetTimeKeys } from '../../enums';

export const DirectionDefault = DirectionKeys.left;

/** Just for temporary moment in context, before home panel is set */
export const DashboardDefaultPanel: Panel = {
  id: '00000000',
  name: 'default',
  label: '',
  widgets: {
    calendar: {
      active: false,
    },
    dateTime: {
      active: false,
      timeType: dateTimeWidgetTimeKeys.numeric,
      separatorBlink: false,
      showSeconds: false,
      showHolidays: false,
      showTomorrowHolidays: false,
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
