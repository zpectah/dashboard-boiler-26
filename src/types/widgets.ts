import { dateTimeWidgetTimeKeys } from '../enums';
import type { EnumKeyValues } from './common';

export type WidgetDateTimeTime = EnumKeyValues<typeof dateTimeWidgetTimeKeys>;

export interface CalendarWidget {
  active: boolean;
}

export interface DateTimeWidget {
  active: boolean;
  type: WidgetDateTimeTime;
  blinkingSemi: boolean;
  seconds: boolean;
}

export interface HolidaysWidget {
  active: boolean;
  showTomorrow: boolean;
}

export interface LinksWidget {
  active: boolean;
}

export interface WeatherWidget {
  active: boolean;
}
