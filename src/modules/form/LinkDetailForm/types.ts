import z from 'zod';
import type { linkDetailFormSchema } from './schema';

export type ILinkDetailForm = z.infer<typeof linkDetailFormSchema>;
