import type { Panel } from '../../types';
import { DirectionKeys } from './enums';

export const DirectionDefault = DirectionKeys.left;

/** Just for temporary moment in context, before home panel is set */
export const DashboardDefaultPanel: Panel = {
  id: '000000',
  name: 'default',
  label: 'Default',
  widgets: {
    /* TODO: tbd */
    calendar: false,
    clockAnalog: false,
    clockNumeric: false,
    dateTime: false,
    holidays: false,
    links: false,
    weather: false,
  },
};
