import type { ReactNode } from 'react';
import type {
  DialogProps,
  DialogTitleProps,
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
  actions?: ReactNode;
  disableCloseButton?: boolean;
  disableBackdropClose?: boolean;
  disableEscapeClose?: boolean;
  labelId?: string;
  titleProps?: Partial<Omit<DialogTitleProps, 'children'>>;
  contentProps?: Partial<DialogContentProps>;
  subcontentProps?: Partial<DialogContentProps>;
  actionsProps?: Partial<Omit<DialogActionsProps, 'children'>>;
}
