import type { EnumKeyValues } from './common';
import type { UserLinks } from './links';
import { dateTimeWidgetTimeKeys } from '../enums';

export type WidgetDateTimeType = EnumKeyValues<typeof dateTimeWidgetTimeKeys>;

export interface DateTimeWidget {
  active: boolean;
  timeType: WidgetDateTimeType;
  separatorBlink: boolean;
  showSeconds: boolean;
  showHolidays: boolean;
  showTomorrowHolidays: boolean;
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
