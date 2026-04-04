import z from 'zod';
import type { AppFeatures, PanelEffect } from '../../types';
import { settingsFormSchema } from './schema';

export type ISettingsForm = z.infer<typeof settingsFormSchema>;

export interface SettingsFormMaster extends AppFeatures {
  panelEffect: PanelEffect;
}
