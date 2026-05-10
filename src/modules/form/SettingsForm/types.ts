import z from 'zod';
import { settingsFormSchema } from './schema';

export type ISettingsForm = z.infer<typeof settingsFormSchema>;
