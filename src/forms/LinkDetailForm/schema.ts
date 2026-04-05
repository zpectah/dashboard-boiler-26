import z from 'zod';

export const linkDetailFormSchema = z.object({
  id: z.string(),
  url: z.string(),
  label: z.string(),
  order: z.number(),
});
