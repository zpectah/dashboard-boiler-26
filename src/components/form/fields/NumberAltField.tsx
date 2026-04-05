import { NumberAltInput } from '../input';
import { ControlledFormField } from '../field';
import type { NumberAltFieldProps } from './types';

const NumberAltField = ({
  name,
  label,
  inputProps,
  isRequired,
  isDisabled,
  isReadOnly,
  isFullWidth,
  placeholder,
  ...rest
}: NumberAltFieldProps) => {
  return (
    <ControlledFormField
      name={name}
      label={label}
      render={(id, field, fieldState) => (
        <NumberAltInput
          id={id}
          error={!!fieldState.error}
          required={isRequired}
          disabled={isDisabled}
          isReadOnly={isReadOnly}
          fullWidth={isFullWidth}
          placeholder={placeholder}
          {...inputProps}
          {...field}
        />
      )}
      isRequired={isRequired}
      {...rest}
    />
  );
};

export default NumberAltField;
