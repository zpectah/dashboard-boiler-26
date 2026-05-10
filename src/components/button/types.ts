import type { IconButtonProps, TooltipProps } from '@mui/material';
import type { ButtonElementProps } from '@/types';

export type CloseButtonProps = IconButtonProps;

export type MiniButtonProps = ButtonElementProps & {
  tooltip?: string;
  tooltipProps?: Partial<Omit<TooltipProps, 'title'>>;
};

export interface IconButtonPlusProps extends Omit<IconButtonProps, 'title'> {
  tooltip?: string;
  tooltipProps?: Partial<Omit<TooltipProps, 'title'>>;
}
