import z from 'zod';
import { commonFieldSchema } from '../../validation';

export const linkDetailFormSchema = z.object({
  id: commonFieldSchema.string_required,
  url: commonFieldSchema.string_required,
  label: commonFieldSchema.string_minLength,
  order: commonFieldSchema.number,
});
