import type { ReactNode } from 'react';
import type {
  BoxProps,
  DrawerProps as MUiDrawerProps,
  AlertProps,
} from '@mui/material';
import type { IconButtonPlusProps } from '../button';
import type { WidthCommonValue, WithChildren } from '../../types';

export interface DrawerLayoutProps extends WithChildren {
  labelId?: string;
  actions?: ReactNode;
  title?: ReactNode;
  titleIcon?: ReactNode;
  titleSlot?: ReactNode;
  titleActions?: IconButtonPlusProps[];
  text?: string;
  disableCloseButton?: boolean;
  onClose: () => void;
  wrapperProps?: Partial<BoxProps>;
  actionsMessages?: AlertProps[];
}

export interface DrawerBaseProps extends Omit<MUiDrawerProps, 'title'> {
  labelId?: string;
  width?: WidthCommonValue;
  disableBackdropClose?: boolean;
}

export interface DrawerProps extends DrawerBaseProps {
  actions?: ReactNode;
  title?: ReactNode;
  titleIcon?: ReactNode;
  titleSlot?: ReactNode;
  titleActions?: IconButtonPlusProps[];
  text?: string;
  disableCloseButton?: boolean;
}
