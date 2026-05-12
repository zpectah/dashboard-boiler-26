import z from 'zod';
import { introductionFormSchema } from './schema';

export type IIntroductionForm = z.infer<typeof introductionFormSchema>;
