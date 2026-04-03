import { ControlledFormField } from '../field';
import { Checkbox } from '../input';
import type { CheckboxFieldProps } from './types';

const CheckboxField = ({
  name,
  label,
  checkboxProps,
  isRequired,
  isDisabled,
  fieldLabel,
  ...rest
}: CheckboxFieldProps) => {
  return (
    <ControlledFormField
      name={name}
      label={label}
      render={(id, field, fieldState) => (
        <Checkbox
          label={fieldLabel}
          id={id}
          checked={!!field.value}
          required={isRequired}
          disabled={isDisabled}
          color={fieldState.error ? 'error' : 'primary'}
          {...checkboxProps}
          {...field}
        />
      )}
      isRequired={isRequired}
      {...rest}
    />
  );
};

export default CheckboxField;
