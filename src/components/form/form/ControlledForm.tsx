import { FormProvider, type FieldValues } from 'react-hook-form';
import type { ControlledFormProps } from './types';
import Form from './Form';

const ControlledForm = <T extends FieldValues>({
  form,
  ...rest
}: ControlledFormProps<T>) => (
  <FormProvider {...form}>
    <Form {...rest} />
  </FormProvider>
);

export default ControlledForm;
