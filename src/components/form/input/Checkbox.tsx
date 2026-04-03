import { forwardRef } from 'react';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import type { CheckboxProps } from './types';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, checkboxProps, ...rest } = props;

  return (
    <FormControlLabel
      ref={ref}
      control={<MuiCheckbox {...checkboxProps} />}
      label={label}
      {...rest}
    />
  );
});

export default Checkbox;
