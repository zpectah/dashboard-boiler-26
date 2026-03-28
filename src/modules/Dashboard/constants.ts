import { DirectionKeys } from './enums';
import type { Panel } from '../../types';

export const DirectionDefault = DirectionKeys.left;

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
  },
};
