import { panelEffectKeys } from '../enums';

export type PanelEffect = keyof typeof panelEffectKeys;

interface PanelWidgets {
  /* TODO */
  calendar?: boolean;
  clockAnalog?: boolean;
  clockNumeric?: boolean;
  dateTime?: boolean;
  holidays?: boolean;
  links?: boolean;
  weather?: boolean;
}

export interface Panel {
  id: string;
  name: string;
  label?: string;
  widgets: PanelWidgets;
}
