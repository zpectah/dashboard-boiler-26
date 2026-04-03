import type { ReactNode } from 'react';
import type { FormFieldProps } from '../field';

export interface LiteralProps extends Omit<FormFieldProps, 'children'> {
  value?: ReactNode;
}
