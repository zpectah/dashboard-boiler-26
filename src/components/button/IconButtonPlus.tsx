import { IconButton, Tooltip } from '@mui/material';
import type { IconButtonPlusProps } from './types';

const IconButtonPlus = ({
  tooltip,
  tooltipProps,
  ...rest
}: IconButtonPlusProps) => {
  if (tooltip) {
    return (
      <Tooltip title={tooltip} {...tooltipProps}>
        <IconButton {...rest} />
      </Tooltip>
    );
  }

  return <IconButton {...rest} />;
};

export default IconButtonPlus;
