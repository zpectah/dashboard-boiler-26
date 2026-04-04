import type { GridProps } from '@mui/material';
import type {
  CalendarWidget,
  DateTimeWidget,
  HolidaysWidget,
  LinksWidget,
  WeatherWidget,
} from '../../../types';

type WidgetCommon = {
  gridProps?: Partial<GridProps>;
};

export type CalendarWidgetProps = WidgetCommon & CalendarWidget;

export type DateTimeWidgetProps = WidgetCommon & DateTimeWidget;

export type HolidaysWidgetProps = WidgetCommon & HolidaysWidget;

export type LinksWidgetProps = WidgetCommon & LinksWidget;

export type WeatherWidgetProps = WidgetCommon & WeatherWidget;
