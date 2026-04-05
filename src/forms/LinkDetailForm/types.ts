import z from 'zod';
import { linkDetailFormSchema } from './schema.ts';

export type ILinkDetailForm = z.infer<typeof linkDetailFormSchema>;
