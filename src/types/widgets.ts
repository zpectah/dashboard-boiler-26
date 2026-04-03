import { dateTimeWidgetTimeKeys } from '../enums';
import type { EnumKeyValues } from './common';

export type WidgetDateTimeTime = EnumKeyValues<typeof dateTimeWidgetTimeKeys>;

export interface PanelCalendarWidget {
  active: boolean;
}

export interface PanelDateTimeWidget {
  active: boolean;
  type: WidgetDateTimeTime;
  blinkingSemi: boolean;
}

export interface PanelHolidaysWidget {
  active: boolean;
  showTomorrow: boolean;
}

export interface PanelLinksWidget {
  active: boolean;
}

export interface PanelWeatherWidget {
  active: boolean;
}
