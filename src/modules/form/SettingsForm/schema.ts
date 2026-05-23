import z from 'zod';
import { commonFieldSchema } from '@/validation';

export const settingsFormSchema = z.object({
  linksGoogle: commonFieldSchema.boolean,
  linksApple: commonFieldSchema.boolean,
  linksMicrosoft: commonFieldSchema.boolean,
});
