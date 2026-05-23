import {
  datetimeWidgetHolidaysOriginKeys,
  datetimeWidgetTypeKeys,
  searchWidgetEnginesKeys,
} from '@/enums';

export const datetimeWidgetTypeKeysArray = [
  ...Object.keys(datetimeWidgetTypeKeys),
] as [string, ...string[]];

export const datetimeWidgetHolidaysOriginKeysArray = [
  ...Object.keys(datetimeWidgetHolidaysOriginKeys),
] as [string, ...string[]];

export const searchWidgetEnginesKeysArray = [
  ...Object.keys(searchWidgetEnginesKeys),
] as [string, ...string[]];

export const datetimeWidgetTypeDefault = datetimeWidgetTypeKeys.numeric;

export const datetimeWidgetHolidaysOriginDefault =
  datetimeWidgetHolidaysOriginKeys.world;

export const searchWidgetEngineDefault = searchWidgetEnginesKeys.google;
