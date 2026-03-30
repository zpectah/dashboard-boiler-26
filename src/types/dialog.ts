import type { ReactNode } from 'react';

export interface IConfirmDialog {
  title: string;
  content: ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  buttonLabel?: {
    confirm?: string;
    cancel?: string;
  };
}
