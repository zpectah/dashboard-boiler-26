import {
  dateTimeWidgetHolidaysOriginKeys,
  dateTimeWidgetTimeKeys,
} from '../enums';

export const dateTimeWidgetTimeKeysArray = [
  ...Object.keys(dateTimeWidgetTimeKeys),
] as [string, ...string[]];

export const dateTimeWidgetHolidaysOriginKeysArray = [
  ...Object.keys(dateTimeWidgetHolidaysOriginKeys),
] as [string, ...string[]];

export const dateTimeWidgetTimeDefault = dateTimeWidgetTimeKeys.numeric;
export const dateTimeWidgetHolidaysOriginDefault =
  dateTimeWidgetHolidaysOriginKeys.world;
