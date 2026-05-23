import z from 'zod';
import i18next from 'i18next';
import {
  datetimeWidgetHolidaysOriginKeysArray,
  datetimeWidgetTypeKeysArray,
  searchWidgetEnginesKeysArray,
} from '@/constants';
import { commonFieldSchema } from '@/validation';

export const panelDetailFormSchema = z.object({
  id: commonFieldSchema.string,
  label: commonFieldSchema.string_minLength.refine((val) => val.length <= 50, {
    error: () => i18next.t('form:message.error.max_length'),
  }),
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
      icons: commonFieldSchema.boolean,
    }),
    search: z.object({
      active: commonFieldSchema.boolean,
      engine: z.enum(searchWidgetEnginesKeysArray),
    }),
  }),
});
