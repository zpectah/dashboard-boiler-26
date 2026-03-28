interface PanelWidgets {
  /* TODO */
  calendar?: boolean;
  clockAnalog?: boolean;
  clockNumeric?: boolean;
  dateTime?: boolean;
  holidays?: boolean;
  links?: boolean;
}

export interface Panel {
  id: string;
  name: string;
  label?: string;
  widgets: PanelWidgets;
}
