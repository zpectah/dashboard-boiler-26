import type { ReactNode } from 'react';
import type {
  FormControlLabelProps,
  CheckboxProps as MuiCheckboxProps,
  TextFieldProps,
  SelectProps as MuiSelectProps,
  MenuItemProps,
} from '@mui/material';

export interface CheckboxProps extends Omit<
  FormControlLabelProps,
  'control' | 'label'
> {
  label?: string;
  checkboxProps?: Partial<MuiCheckboxProps>;
}

export type InputProps = Omit<TextFieldProps, 'label' | 'helperText'> & {
  isReadOnly?: boolean;
};

export interface InputPlusProps extends Omit<
  TextFieldProps,
  'label' | 'helperText'
> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  isReadOnly?: boolean;
}

export interface OptionItem<T = string | number> {
  id: string;
  value: T;
  label: ReactNode;
  itemProps?: Partial<Omit<MenuItemProps, 'children'>>;
  disabled?: boolean;
  hidden?: boolean;
}

interface SelectOptionsProps {
  options: OptionItem[];
}

export type SelectProps = Omit<MuiSelectProps, 'label' | 'helperText'> &
  SelectOptionsProps & {
    options: OptionItem[];
    placeholder?: string;
    forcePlaceholder?: boolean;
    showSingleOption?: boolean;
  };

export type NumberInputProps = Omit<
  InputPlusProps,
  'type' | 'inputMode' | 'multiline'
>;

export type NumberInputAltProps = Omit<
  NumberInputProps,
  'onChange' | 'startAdornment' | 'endAdornment' | 'multiline'
> & {
  pattern?: string;
  onChange?: (value: number) => void;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  centered?: boolean;
};

export type NumberInputAlt2Props = Omit<
  NumberInputProps,
  'onChange' | 'endAdornment' | 'multiline'
> & {
  pattern?: string;
  onChange?: (value: number) => void;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
};
