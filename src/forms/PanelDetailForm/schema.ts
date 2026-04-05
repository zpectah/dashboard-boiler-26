import z from 'zod';
import { dateTimeWidgetTimeKeysArray } from '../../constants';

const calendarWidgetSchema = z.object({
  active: z.boolean(),
});

const dateTimeWidgetSchema = z.object({
  active: z.boolean(),
  type: z.enum(dateTimeWidgetTimeKeysArray),
  blinkingSemi: z.boolean(),
  seconds: z.boolean(),
});

const holidaysWidgetSchema = z.object({
  active: z.boolean(),
  showTomorrow: z.boolean(),
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
  holidays: holidaysWidgetSchema,
  links: linksWidgetSchema,
  weather: weatherWidgetSchema,
});

export const panelDetailFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  widgets: panelDetailWidgetsSchema,
});
