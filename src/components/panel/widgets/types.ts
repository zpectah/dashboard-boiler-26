import type { GridProps } from '@mui/material';
import type {
  PanelLinksWidget,
  PanelCalendarWidget,
  PanelDatetimeWidget,
  PanelSearchWidget,
} from '@/types';

type WidgetCommon = {
  panelId: string;
  gridProps?: Partial<GridProps>;
};

export type CalendarWidgetProps = WidgetCommon & PanelCalendarWidget;

export type DatetimeWidgetProps = WidgetCommon & PanelDatetimeWidget;

export type LinksWidgetProps = WidgetCommon & PanelLinksWidget;

export type SearchWidgetProps = WidgetCommon & PanelSearchWidget;
