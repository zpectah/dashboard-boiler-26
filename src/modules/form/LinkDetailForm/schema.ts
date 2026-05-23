import z from 'zod';
import i18next from 'i18next';
import { commonFieldSchema } from '@/validation';

export const linkDetailFormSchema = z.object({
  id: commonFieldSchema.string,
  label: commonFieldSchema.string_minLength.refine((val) => val.length <= 75, {
    error: () => i18next.t('form:message.error.max_length'),
  }),
  url: commonFieldSchema.url,
  order: commonFieldSchema.number,
});
