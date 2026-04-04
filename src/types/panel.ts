import { panelEffectKeys } from '../enums';
import type {
  CalendarWidget,
  DateTimeWidget,
  HolidaysWidget,
  LinksWidget,
  WeatherWidget,
} from './widgets';

export type PanelEffect = keyof typeof panelEffectKeys;

interface PanelWidgets {
  calendar: CalendarWidget;
  dateTime: DateTimeWidget;
  holidays: HolidaysWidget;
  links: LinksWidget;
  weather: WeatherWidget;
}

export interface Panel {
  id: string;
  name: string;
  label?: string;
  isMain?: boolean;
  widgets: PanelWidgets;
}
