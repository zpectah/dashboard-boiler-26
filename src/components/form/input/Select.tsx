import { forwardRef } from 'react';
import { Select as MuiSelect } from '@mui/material';
import type { SelectProps } from './types';

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const { ...rest } = props;

  return <MuiSelect ref={ref} {...rest} />;
});

export default Select;
