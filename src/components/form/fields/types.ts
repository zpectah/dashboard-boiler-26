import type { ControlledFormFieldProps } from '../field';
import type {
  InputPlusProps,
  InputProps,
  SelectProps,
  CheckboxProps,
} from '../input';

export interface FieldBase extends Omit<
  ControlledFormFieldProps,
  'name' | 'render'
> {
  name: string;
  label: string;
  id?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isFullWidth?: boolean;
  placeholder?: string;
}

export interface InputFieldProps extends FieldBase {
  inputProps?: Partial<Omit<InputProps, 'fullWidth' | 'placeholder'>>;
}

export interface InputPlusFieldProps extends FieldBase {
  inputProps?: Partial<
    Omit<
      InputPlusProps,
      'fullWidth' | 'placeholder' | 'startAdornment' | 'endAdornment'
    >
  >;
  startAdornment?: InputPlusProps['startAdornment'];
  endAdornment?: InputPlusProps['endAdornment'];
}

export interface SelectFieldProps extends FieldBase {
  selectProps?: Partial<
    Omit<SelectProps, 'options' | 'fullWidth' | 'placeholder'>
  >;
  options: SelectProps['options'];
}

export interface CheckboxFieldProps extends Omit<
  FieldBase,
  'isReadOnly' | 'isFullWidth' | 'placeholder'
> {
  checkboxProps?: Partial<Omit<CheckboxProps, 'label'>>;
  fieldLabel?: string;
}
