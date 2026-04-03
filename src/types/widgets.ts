import { dateTimeWidgetTimeKeys } from '../enums';
import type { EnumKeyValues } from './common';

export type WidgetDateTimeTime = EnumKeyValues<typeof dateTimeWidgetTimeKeys>;

export interface ICalendarWidget {
  active: boolean;
}

export interface IDateTimeWidget {
  active: boolean;
  type: WidgetDateTimeTime;
  blinkingSemi: boolean;
}

export interface IHolidaysWidget {
  active: boolean;
  showTomorrow: boolean;
}

export interface ILinksWidget {
  active: boolean;
}

export interface IWeatherWidget {
  active: boolean;
}
