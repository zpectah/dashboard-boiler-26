import { useController, useFormContext } from 'react-hook-form';
import { getRandomId } from '../../../utils';
import type { ControlledFormFieldProps } from './types';
import FormField from './FormField';

const ControlledField = ({
  name,
  label,
  htmlFor,
  render,
  isRequired,
  isHidden,
  defaultValue,
  ignoreId,
  errors,
  ...restOfField
}: ControlledFormFieldProps) => {
  const { control } = useFormContext();
  const { field, fieldState, formState } = useController({
    name,
    control,
    rules: { required: isRequired },
    defaultValue: defaultValue ?? '',
  });

  const fieldId = htmlFor ? htmlFor : getRandomId(8);
  const fieldErrorMessage = fieldState.error?.message;
  const fieldErrorMessages: string[] = errors ? [...errors] : [];

  if (fieldErrorMessage) fieldErrorMessages.push(fieldErrorMessage);

  if (isHidden) return;

  return (
    <FormField
      label={label}
      htmlFor={!ignoreId ? fieldId : undefined}
      isRequired={isRequired}
      errors={fieldErrorMessages}
      {...restOfField}
    >
      {render(fieldId, field, fieldState, formState)}
    </FormField>
  );
};

export default ControlledField;
