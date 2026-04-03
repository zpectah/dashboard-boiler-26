import { panelEffectKeys } from '../enums';
import type {
  ICalendarWidget,
  IDateTimeWidget,
  IHolidaysWidget,
  ILinksWidget,
  IWeatherWidget,
} from './widgets';

export type PanelEffect = keyof typeof panelEffectKeys;

interface PanelWidgets {
  calendar: ICalendarWidget;
  dateTime: IDateTimeWidget;
  holidays: IHolidaysWidget;
  links: ILinksWidget;
  weather: IWeatherWidget;
}

export interface Panel {
  id: string;
  name: string;
  label?: string;
  isMain?: boolean;
  widgets: PanelWidgets;
}
