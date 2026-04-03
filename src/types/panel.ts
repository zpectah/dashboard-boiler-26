import { panelEffectKeys } from '../enums';
import type {
  PanelCalendarWidget,
  PanelDateTimeWidget,
  PanelHolidaysWidget,
  PanelLinksWidget,
  PanelWeatherWidget,
} from './widgets';

export type PanelEffect = keyof typeof panelEffectKeys;

interface PanelWidgets {
  calendar: PanelCalendarWidget;
  dateTime: PanelDateTimeWidget;
  holidays: PanelHolidaysWidget;
  links: PanelLinksWidget;
  weather: PanelWeatherWidget;
}

export interface Panel {
  id: string;
  name: string;
  label?: string;
  isMain?: boolean;
  widgets: PanelWidgets;
}
