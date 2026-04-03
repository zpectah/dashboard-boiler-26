import type { ReactNode } from 'react';
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  FieldPathValue,
} from 'react-hook-form';
import type { GridProps, BoxProps, StackProps } from '@mui/material';
import type { WithChildren } from '../../../types';
import type { LabelProps } from '../label';
import { fieldLayoutKeys } from './enums';

export type FieldLayout = keyof typeof fieldLayoutKeys;

export interface FormFieldProps extends WithChildren {
  /** Root element ID */
  id?: string;
  /** Field label */
  label: ReactNode;
  /** Small caption under label, recommended for horizontal layout */
  labelCaption?: string;
  /** Field ID */
  htmlFor?: string;
  /** Is value required */
  isRequired?: boolean;
  /** Helpers messages */
  helpers?: string[];
  /** Error messages */
  errors?: string[];
  /** Layout type */
  layout?: FieldLayout;
  /** Spacing of grid and inner stacks */
  spacing?: number;
  /** Grid container size in wrapped container */
  size?: GridProps['size'];
  /** Grid container props */
  gridProps?: Partial<Omit<GridProps, 'container' | 'spacing' | 'size'>>;
  /** Label props */
  labelProps?: Partial<Omit<LabelProps, 'required' | 'htmlFor'>>;
  /** Label wrapper stack props */
  labelWrapperProps?: Partial<StackProps>;
  /** Box wrapping input */
  inputBoxProps?: Partial<BoxProps>;
  /** Hide the element from DOM */
  isHidden?: boolean;
}

export interface ControlledFormFieldProps extends Omit<
  FormFieldProps,
  'children'
> {
  /** Name of registered field */
  name: string;
  /** Field default value */
  defaultValue?: FieldPathValue<FieldValues, string>;
  /** Render field with field options */
  render: (
    id: string,
    field: ControllerRenderProps<FieldValues, string>,
    fieldState: ControllerFieldState,
    formState: UseFormStateReturn<FieldValues>,
  ) => ReactNode;
  /** In some cases we haven't proper HTML input element to join label with */
  ignoreId?: boolean;
  /** If we want to hide whole component */
  isHidden?: boolean;
}
