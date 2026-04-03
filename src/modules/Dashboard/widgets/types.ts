import type { GridProps } from '@mui/material';
import type {
  PanelCalendarWidget,
  PanelDateTimeWidget,
  PanelHolidaysWidget,
  PanelLinksWidget,
  PanelWeatherWidget,
} from '../../../types';

type WidgetCommon = {
  gridProps?: Partial<GridProps>;
};

export type CalendarWidgetProps = WidgetCommon & PanelCalendarWidget;

export type DateTimeWidgetProps = WidgetCommon & PanelDateTimeWidget;

export type HolidaysWidgetProps = WidgetCommon & PanelHolidaysWidget;

export type LinksWidgetProps = WidgetCommon & PanelLinksWidget;

export type WeatherWidgetProps = WidgetCommon & PanelWeatherWidget;
