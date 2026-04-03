import type { HTMLProps } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';
import type { BoxProps } from '@mui/material';

export type FormElementProps = HTMLProps<HTMLFormElement>;

export type FormProps = FormElementProps &
  BoxProps & {
    testId?: string;
  };

export interface ControlledFormProps<T extends FieldValues> extends Omit<
  FormProps,
  'form'
> {
  form: UseFormReturn<T>;
}
