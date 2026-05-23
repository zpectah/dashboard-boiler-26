import { searchWidgetEnginesKeys } from '@/enums';

export type WidgetHolidaysData = Record<string, Record<string, string>>;

export type WidgetSearchEngines = keyof typeof searchWidgetEnginesKeys;
