import { useTranslation } from 'react-i18next';
import { Button, Grid } from '@mui/material';
import { newLinkId } from '@/constants';
import { useDialogStore } from '@/store';
import {
  ComposedDialog,
  ControlledForm,
  InputField,
  NumberAltField,
} from '@/components';
import { useLinkDetailForm } from './useLinkDetailForm';

const LinkDetailForm = () => {
  const { t } = useTranslation(['common', 'form']);
  const { linkDetailId, closeLinkDetail } = useDialogStore();
  const { form, onSubmit } = useLinkDetailForm();

  const dialogTitle =
    linkDetailId === newLinkId ? t('label.create_link') : t('label.edit');
  const submitLabel =
    linkDetailId === newLinkId ? t('button.create') : t('button.update');

  return (
    <>
      <ComposedDialog
        open={!!linkDetailId}
        onClose={closeLinkDetail}
        title={dialogTitle}
        actions={
          <>
            <Button
              variant="outlined"
              color="inherit"
              onClick={closeLinkDetail}
            >
              {t('button.cancel')}
            </Button>
            <Button type="submit" form="link-detail-form" variant="contained">
              {submitLabel}
            </Button>
          </>
        }
        content={
          <ControlledForm id="link-detail-form" form={form} onSubmit={onSubmit}>
            <input type="hidden" {...form.register('id')} />
            <Grid container spacing={2}>
              <InputField
                name="label"
                label={t('form:label.link.label')}
                placeholder={t('form:placeholder.link.label')}
                layout="vertical"
                isFullWidth
              />
              <InputField
                name="url"
                label={t('form:label.link.url')}
                placeholder={t('form:placeholder.link.url')}
                layout="vertical"
                isFullWidth
              />
              <NumberAltField
                name="order"
                label={t('form:label.link.order')}
                layout="vertical"
                isFullWidth
              />
            </Grid>
          </ControlledForm>
        }
      />
    </>
  );
};

export default LinkDetailForm;
