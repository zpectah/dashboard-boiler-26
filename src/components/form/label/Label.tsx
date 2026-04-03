import { FormLabel } from '@mui/material';
import { type LabelProps } from './types';

const Label = ({ children, ...rest }: LabelProps) => {
  return <FormLabel {...rest}>{children}</FormLabel>;
};

export default Label;
