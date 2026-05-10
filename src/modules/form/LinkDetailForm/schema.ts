import z from 'zod';
import { commonFieldSchema } from '@/validation';

export const linkDetailFormSchema = z.object({
  id: commonFieldSchema.string,
  label: commonFieldSchema.string_minLength,
  url: commonFieldSchema.url,
  order: commonFieldSchema.number,
});
