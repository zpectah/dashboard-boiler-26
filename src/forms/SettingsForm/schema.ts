import z from 'zod';
import { panelEffectKeysArray } from '../../constants';
import { commonFieldSchema } from '../../validation';

export const settingsFormSchema = z.object({
  panelEffect: z.enum(panelEffectKeysArray),
  googleLinks: commonFieldSchema.boolean,
  msLinks: commonFieldSchema.boolean,
  appleLinks: commonFieldSchema.boolean,
});
