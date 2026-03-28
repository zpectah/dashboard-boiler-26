import z from 'zod';
import type { panelDetailFormSchema } from './schema.ts';

export type IPanelDetailForm = z.infer<typeof panelDetailFormSchema>;
