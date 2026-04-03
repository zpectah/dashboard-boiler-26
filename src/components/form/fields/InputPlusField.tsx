import { ControlledFormField } from '../field';
import { InputPlus } from '../input';
import type { InputPlusFieldProps } from './types';

const InputField = ({
  name,
  label,
  inputProps,
  isRequired,
  isDisabled,
  isReadOnly,
  isFullWidth,
  placeholder,
  startAdornment,
  endAdornment,
  ...rest
}: InputPlusFieldProps) => {
  return (
    <ControlledFormField
      name={name}
      label={label}
      render={(id, field, fieldState) => (
        <InputPlus
          id={id}
          error={!!fieldState.error}
          required={isRequired}
          disabled={isDisabled}
          isReadOnly={isReadOnly}
          fullWidth={isFullWidth}
          placeholder={placeholder}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          {...inputProps}
          {...field}
        />
      )}
      isRequired={isRequired}
      {...rest}
    />
  );
};

export default InputField;
