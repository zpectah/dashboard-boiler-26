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
      type: dateTimeWidgetTimeKeys.numeric,
      blinkingSemi: false,
    },
    holidays: {
      active: false,
      showTomorrow: false,
    },
    links: {
      active: false,
    },
    weather: {
      active: false,
    },
  },
};
