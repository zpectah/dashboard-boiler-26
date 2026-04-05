import { Button, Grid } from '@mui/material';
import { useDialogStore } from '../../store';
import {
  ComposedDialog,
  ControlledForm,
  InputField,
  NumberAltField,
} from '../../components';
import { useLinkDetailForm } from './useLinkDetailForm';

const LinkDetailForm = () => {
  const { linkDetailDialog, closeLinkDetailDialog } = useDialogStore();
  const { form, formId, detail, isNew, onSubmit } = useLinkDetailForm();

  return (
    <ComposedDialog
      open={!!linkDetailDialog}
      onClose={closeLinkDetailDialog}
      maxWidth="sm"
      fullWidth
      title={isNew ? 'New link' : detail?.label}
      actions={
        <>
          <Button onClick={closeLinkDetailDialog} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" form={formId} variant="contained">
            {isNew ? 'Create' : 'Update'}
          </Button>
        </>
      }
      content={
        <ControlledForm id={formId} form={form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <input type="hidden" {...form.register('id')} />
            <InputField name="url" label="Url" layout="vertical" isFullWidth />
            <InputField
              name="label"
              label="Label"
              layout="vertical"
              isFullWidth
            />
            <NumberAltField
              name="order"
              label="Order"
              layout="vertical"
              isFullWidth
            />
          </Grid>
        </ControlledForm>
      }
    />
  );
};

export default LinkDetailForm;
