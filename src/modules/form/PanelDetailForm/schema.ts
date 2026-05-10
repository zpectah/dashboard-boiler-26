import z from 'zod';
import {
  datetimeWidgetHolidaysOriginKeysArray,
  datetimeWidgetTypeKeysArray,
} from '@/constants';
import { commonFieldSchema } from '@/validation';

export const panelDetailFormSchema = z.object({
  id: commonFieldSchema.string,
  label: commonFieldSchema.string_minLength,
  widgets: z.object({
    datetime: z.object({
      active: commonFieldSchema.boolean,
      type: z.enum(datetimeWidgetTypeKeysArray),
      date: commonFieldSchema.boolean,
      fullDate: commonFieldSchema.boolean,
      weekDay: commonFieldSchema.boolean,
      seconds: commonFieldSchema.boolean,
      secondsBlink: commonFieldSchema.boolean,
      weather: commonFieldSchema.boolean,
      holidays: commonFieldSchema.boolean,
      tomorrowHolidays: commonFieldSchema.boolean,
      holidaysOrigin: z.enum(datetimeWidgetHolidaysOriginKeysArray),
    }),
    calendar: z.object({
      active: commonFieldSchema.boolean,
    }),
    links: z.object({
      active: commonFieldSchema.boolean,
    }),
  }),
});
