import type { IconButtonProps, TooltipProps } from '@mui/material';

export type CloseButtonProps = IconButtonProps;

export interface IconButtonPlusProps extends Omit<IconButtonProps, 'title'> {
  tooltip?: string;
  tooltipProps?: Partial<Omit<TooltipProps, 'title'>>;
}
