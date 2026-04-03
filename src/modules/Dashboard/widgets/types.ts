import type { GridProps } from '@mui/material';
import type {
  ICalendarWidget,
  IDateTimeWidget,
  IHolidaysWidget,
  ILinksWidget,
  IWeatherWidget,
} from '../../../types';

type WidgetCommon = {
  gridProps?: Partial<GridProps>;
};

export type CalendarWidgetProps = WidgetCommon & ICalendarWidget;

export type DateTimeWidgetProps = WidgetCommon & IDateTimeWidget;

export type HolidaysWidgetProps = WidgetCommon & IHolidaysWidget;

export type LinksWidgetProps = WidgetCommon & ILinksWidget;

export type WeatherWidgetProps = WidgetCommon & IWeatherWidget;
