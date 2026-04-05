import type { EnumKeyValues } from './common';
import type { UserLinks } from './links';
import {
  dateTimeWidgetTimeKeys,
  dateTimeWidgetHolidaysOriginKeys,
} from '../enums';

export type WidgetDateTimeType = EnumKeyValues<typeof dateTimeWidgetTimeKeys>;
export type WidgetDateTimeHolidaysOrigin = EnumKeyValues<
  typeof dateTimeWidgetHolidaysOriginKeys
>;

export interface DateTimeWidget {
  active: boolean;
  showDate: boolean;
  timeType: WidgetDateTimeType;
  separatorBlink: boolean;
  showSeconds: boolean;
  showHolidays: boolean;
  showTomorrowHolidays: boolean;
  holidaysOrigin: WidgetDateTimeHolidaysOrigin;
}

export interface LinksWidget {
  active: boolean;
  links: UserLinks[];
}

export interface CalendarWidget {
  active: boolean;
}

export interface WeatherWidget {
  active: boolean;
}
