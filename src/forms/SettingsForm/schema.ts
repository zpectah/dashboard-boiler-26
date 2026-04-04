import z from 'zod';
import { panelEffectKeysArray } from '../../constants';

export const settingsFormSchema = z.object({
  panelEffect: z.enum(panelEffectKeysArray),
  googleLinks: z.boolean(),
  msLinks: z.boolean(),
  appleLinks: z.boolean(),
});
