import z from 'zod';
import {
  dateTimeWidgetHolidaysOriginKeysArray,
  dateTimeWidgetTimeKeysArray,
} from '../../constants';

const calendarWidgetSchema = z.object({
  active: z.boolean(),
});

const dateTimeWidgetSchema = z.object({
  active: z.boolean(),
  showDate: z.boolean(),
  timeType: z.enum(dateTimeWidgetTimeKeysArray),
  separatorBlink: z.boolean(),
  showSeconds: z.boolean(),
  showHolidays: z.boolean(),
  showTomorrowHolidays: z.boolean(),
  holidaysOrigin: z.enum(dateTimeWidgetHolidaysOriginKeysArray),
});

const linksWidgetSchema = z.object({
  active: z.boolean(),
});

const weatherWidgetSchema = z.object({
  active: z.boolean(),
});

const panelDetailWidgetsSchema = z.object({
  calendar: calendarWidgetSchema,
  dateTime: dateTimeWidgetSchema,
  links: linksWidgetSchema,
  weather: weatherWidgetSchema,
});

export const panelDetailFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  widgets: panelDetailWidgetsSchema,
});
