import { panelEffectKeys } from '../enums';

export type PanelEffect = keyof typeof panelEffectKeys;

interface PanelWidgets {
  /* TODO: define each widget options */
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
  isMain?: boolean;
  widgets: PanelWidgets;
}
