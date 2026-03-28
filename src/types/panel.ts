interface PanelContent {
  /* TODO */
}

export interface Panel {
  id: string;
  name: string;
  label?: string;
  content: PanelContent;
}
