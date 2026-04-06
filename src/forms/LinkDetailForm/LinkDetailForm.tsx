import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('common');
  const { linkDetailDialog, closeLinkDetailDialog } = useDialogStore();
  const { form, formId, detail, isNew, onSubmit } = useLinkDetailForm();

  return (
    <ComposedDialog
      open={!!linkDetailDialog}
      onClose={closeLinkDetailDialog}
      maxWidth="sm"
      fullWidth
      title={isNew ? t('button.newLink') : detail?.label}
      actions={
        <>
          <Button onClick={closeLinkDetailDialog} variant="outlined">
            {t('button.cancel')}
          </Button>
          <Button type="submit" form={formId} variant="contained">
            {isNew ? t('button.create') : t('button.update')}
          </Button>
        </>
      }
      content={
        <ControlledForm id={formId} form={form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <input type="hidden" {...form.register('id')} />
            <InputField
              name="url"
              label={t('form.label.url')}
              layout="vertical"
              isFullWidth
              isRequired
            />
            <InputField
              name="label"
              label={t('form.label.label')}
              layout="vertical"
              isFullWidth
              isRequired
            />
            <NumberAltField
              name="order"
              label={t('form.label.order')}
              layout="vertical"
              size={{ xs: 12, sm: 6 }}
            />
          </Grid>
        </ControlledForm>
      }
    />
  );
};

export default LinkDetailForm;
