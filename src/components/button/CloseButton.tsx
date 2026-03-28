import { forwardRef } from 'react';
import { IconButton } from '@mui/material';
import { IconX } from '@tabler/icons-react';
import type { CloseButtonProps } from './types';

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (props, ref) => {
    const { ...rest } = props;

    return (
      <IconButton ref={ref} {...rest}>
        <IconX />
      </IconButton>
    );
  },
);

export default CloseButton;
