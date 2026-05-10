import z from 'zod';
import type { panelDetailFormSchema } from './schema';

export type IPanelDetailForm = z.infer<typeof panelDetailFormSchema>;
