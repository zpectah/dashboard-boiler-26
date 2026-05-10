import z from 'zod';

export const settingsFormSchema = z.object({
  linksGoogle: z.boolean(),
  linksApple: z.boolean(),
  linksMicrosoft: z.boolean(),
});
