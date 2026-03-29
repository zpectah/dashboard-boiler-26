import { IconButton, Tooltip } from '@mui/material';
import type { IconButtonPlusProps } from './types';

const IconButtonPlus = ({
  tooltip,
  tooltipProps,
  ...rest
}: IconButtonPlusProps) => {
  return (
    <Tooltip title={tooltip} {...tooltipProps}>
      <IconButton {...rest} />
    </Tooltip>
  );
};

export default IconButtonPlus;
