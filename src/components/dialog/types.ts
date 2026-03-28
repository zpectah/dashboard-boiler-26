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
  content?: ReactNode;
  title?: ReactNode;
  actions?: ReactNode;
  disableCloseButton?: boolean;
  disableBackdropClose?: boolean;
  labelId?: string;
  titleProps?: Partial<Omit<DialogTitleProps, 'children'>>;
  contentProps?: Partial<DialogContentProps>;
  actionsProps?: Partial<Omit<DialogActionsProps, 'children'>>;
}
