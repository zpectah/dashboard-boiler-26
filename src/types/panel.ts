import {
  datetimeWidgetHolidaysOriginKeys,
  datetimeWidgetTypeKeys,
} from '@/enums';
import type { UserLinks } from './links';
import type { EnumKeyValues } from './common';
import type { WidgetSearchEngines } from './widgets';

interface PanelWidgetBase {
  active: boolean;
}

export type PanelDatetimeWidgetType = EnumKeyValues<
  typeof datetimeWidgetTypeKeys
>;
export type PanelDatetimeWidgetHolidaysOriginType = EnumKeyValues<
  typeof datetimeWidgetHolidaysOriginKeys
>;

export type PanelDatetimeWidget = PanelWidgetBase & {
  /** Widget type by clock: analog or numeric */
  type: PanelDatetimeWidgetType;
  /** Show date */
  date: boolean;
  /** Show date in full string */
  fullDate: boolean;
  /** Show name of day */
  weekDay: boolean;
  /** Show seconds */
  seconds: boolean;
  /** Blinking time separator */
  secondsBlink: boolean;
  /** Show weather */
  weather: boolean;
  /** Show holidays */
  holidays: boolean;
  /** Show holidays also for tomorrow */
  tomorrowHolidays: boolean;
  /** Holidays origin options */
  holidaysOrigin: PanelDatetimeWidgetHolidaysOriginType;
};

export type PanelCalendarWidget = PanelWidgetBase & {
  /* No further properties */
};

export type PanelLinksWidget = PanelWidgetBase & {
  /** List of user-created links */
  links: UserLinks;
  /** If links should have favicons */
  icons: boolean;
};

export type PanelSearchWidget = PanelWidgetBase & {
  engine: WidgetSearchEngines;
};

export interface PanelWidgets {
  datetime: PanelDatetimeWidget;
  calendar: PanelCalendarWidget;
  links: PanelLinksWidget;
  search: PanelSearchWidget;
}

export interface Panel {
  /** Unique panel ID */
  id: string;
  /** Custom label */
  label: string;
  /** Featured panel widgets */
  widgets: PanelWidgets;
}
