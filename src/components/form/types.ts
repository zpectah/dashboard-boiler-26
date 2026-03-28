import type {
  FormControlLabelProps,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

export interface CheckboxProps extends Omit<
  FormControlLabelProps,
  'control' | 'label'
> {
  label?: string;
  checkboxProps?: Partial<MuiCheckboxProps>;
}
