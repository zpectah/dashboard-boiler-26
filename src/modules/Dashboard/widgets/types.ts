import type { GridProps } from '@mui/material';

type WidgetCommon = {
  gridProps?: Partial<GridProps>;
};

export type CalendarWidgetProps = WidgetCommon;

export type ClockAnalogWidgetProps = WidgetCommon;

export type ClockNumericWidgetProps = WidgetCommon;

export type DateTimeWidgetProps = WidgetCommon;

export type HolidaysWidgetProps = WidgetCommon;

export type LinksWidgetProps = WidgetCommon;

export type WeatherWidgetProps = WidgetCommon;
