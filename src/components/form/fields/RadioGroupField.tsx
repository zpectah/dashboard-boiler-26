import { RadioGroup } from '../input';
import { ControlledFormField } from '../field';
import { type RadioGroupFieldProps } from './types';

const RadioGroupField = ({
  name,
  label,
  radioGroupProps,
  isRequired,
  isDisabled,
  items,
  ...rest
}: RadioGroupFieldProps) => {
  return (
    <ControlledFormField
      name={name}
      label={label}
      render={(id, field, fieldState) => (
        <RadioGroup
          id={id}
          disabled={isDisabled}
          color={fieldState.error ? 'error' : 'primary'}
          items={items}
          {...radioGroupProps}
          {...field}
        />
      )}
      isRequired={isRequired}
      {...rest}
    />
  );
};

export default RadioGroupField;
