import { FormField } from '../field';
import type { LiteralProps } from './types';

const Literal = ({ label, value, ...rest }: LiteralProps) => {
  return (
    <FormField label={label} {...rest}>
      {value}
    </FormField>
  );
};

export default Literal;
