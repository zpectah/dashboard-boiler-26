import z from 'zod';
import {
  dateTimeWidgetHolidaysOriginKeysArray,
  dateTimeWidgetTimeKeysArray,
} from '../../constants';
import { commonFieldSchema } from '../../validation';

const calendarWidgetSchema = z.object({
  active: commonFieldSchema.boolean,
});

const dateTimeWidgetSchema = z.object({
  active: commonFieldSchema.boolean,
  showDate: commonFieldSchema.boolean,
  timeType: z.enum(dateTimeWidgetTimeKeysArray),
  separatorBlink: commonFieldSchema.boolean,
  showSeconds: commonFieldSchema.boolean,
  showHolidays: commonFieldSchema.boolean,
  showTomorrowHolidays: commonFieldSchema.boolean,
  holidaysOrigin: z.enum(dateTimeWidgetHolidaysOriginKeysArray),
});

const linksWidgetSchema = z.object({
  active: commonFieldSchema.boolean,
});

const weatherWidgetSchema = z.object({
  active: commonFieldSchema.boolean,
});

const panelDetailWidgetsSchema = z.object({
  calendar: calendarWidgetSchema,
  dateTime: dateTimeWidgetSchema,
  links: linksWidgetSchema,
  weather: weatherWidgetSchema,
});

export const panelDetailFormSchema = z.object({
  id: commonFieldSchema.string_required,
  name: commonFieldSchema.string_minLength,
  label: commonFieldSchema.string_minLength,
  widgets: panelDetailWidgetsSchema,
});
