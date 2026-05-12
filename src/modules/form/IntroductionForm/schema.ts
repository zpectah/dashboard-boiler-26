import z from 'zod';

export const introductionFormSchema = z.object({
  favoritesId: z.array(z.string()),
  featuredId: z.array(z.string()),
});
