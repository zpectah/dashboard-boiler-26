import type { ReactNode } from 'react';
import type {
  DialogProps,
  DialogContentProps,
  DialogActionsProps,
} from '@mui/material';

export interface ComposedDialogProps extends Omit<
  DialogProps,
  'content' | 'title'
> {
  /** Styled main dialog content */
  content?: ReactNode;
  /** For form messages etc. */
  subcontent?: ReactNode;
  title?: ReactNode;
  titleSlot?: ReactNode;
  actions?: ReactNode;
  disableCloseButton?: boolean;
  disableBackdropClose?: boolean;
  disableEscapeClose?: boolean;
  labelId?: string;
  contentProps?: Partial<DialogContentProps>;
  subcontentProps?: Partial<DialogContentProps>;
  actionsProps?: Partial<Omit<DialogActionsProps, 'children'>>;
}
