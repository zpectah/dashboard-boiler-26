import {
  datetimeWidgetHolidaysOriginKeys,
  datetimeWidgetTypeKeys,
} from '@/enums';

export const datetimeWidgetTypeKeysArray = [
  ...Object.keys(datetimeWidgetTypeKeys),
] as [string, ...string[]];

export const datetimeWidgetHolidaysOriginKeysArray = [
  ...Object.keys(datetimeWidgetHolidaysOriginKeys),
] as [string, ...string[]];

export const datetimeWidgetTypeDefault = datetimeWidgetTypeKeys.numeric;

export const datetimeWidgetHolidaysOriginDefault =
  datetimeWidgetHolidaysOriginKeys.world;
