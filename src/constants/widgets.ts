import { dateTimeWidgetTimeKeys } from '../enums';

export const dateTimeWidgetTimeKeysArray = [
  ...Object.keys(dateTimeWidgetTimeKeys),
] as [string, ...string[]];

export const dateTimeWidgetTimeDefault = dateTimeWidgetTimeKeys.numeric;
