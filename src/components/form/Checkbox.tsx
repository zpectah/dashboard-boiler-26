import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import type { CheckboxProps } from './types';

const Checkbox = ({ label, checkboxProps, ...rest }: CheckboxProps) => {
  return (
    <FormControlLabel
      control={<MuiCheckbox {...checkboxProps} />}
      label={label}
      {...rest}
    />
  );
};

export default Checkbox;
