import { useTranslation } from 'react-i18next';
import { Button, Grid, Alert } from '@mui/material';
import { useDialogStore } from '../../store';
import { ComposedDialog, ControlledForm, InputField } from '../../components';
import { usePanelDetailForm } from './usePanelDetailForm';
import {
  CalendarFormPart,
  DateTimeFormPart,
  LinksFormPart,
  WeatherFormPart,
} from './parts';

const PanelDetailForm = () => {
  const { t } = useTranslation(['common', 'feedback']);
  const { panelDialog, onClosePanelDialog } = useDialogStore();
  const {
    form,
    formId,
    isMain,
    isNew,
    detail,
    options,
    onSubmit,
    formWarning,
  } = usePanelDetailForm();

  return (
    <ComposedDialog
      open={!!panelDialog}
      onClose={onClosePanelDialog}
      maxWidth="md"
      fullWidth
      title={isNew ? t('common:button.newPanel') : detail?.label}
      actions={
        <>
          <Button onClick={onClosePanelDialog} variant="outlined">
            {t('common:button.cancel')}
          </Button>
          <Button type="submit" form={formId} variant="contained">
            {isNew ? t('common:button.create') : t('common:button.update')}
          </Button>
        </>
      }
      content={
        <ControlledForm
          form={form}
          id={formId}
          className={isMain ? 'is-main' : ''}
          onSubmit={onSubmit}
        >
          <input type="hidden" {...form.register('id')} />
          <Grid container spacing={2}>
            <Grid size={12} container spacing={2}>
              <InputField
                name="label"
                label={t('common:form.label.label')}
                layout="vertical"
                isFullWidth
                isRequired
                size={{ xs: 12, md: 6 }}
              />
              <InputField
                name="name"
                label={t('common:form.label.name')}
                layout="vertical"
                isFullWidth
                isRequired
                isDisabled={isMain}
                size={{ xs: 12, md: 6 }}
              />
            </Grid>
            <Grid size={12} spacing={2}>
              <DateTimeFormPart
                options={{
                  timeType: options.dateTime.timeType,
                  holidaysOrigin: options.dateTime.holidaysOrigin,
                }}
              />
              <WeatherFormPart />
              <CalendarFormPart />
              <LinksFormPart />
            </Grid>

            {formWarning && (
              <Alert severity="warning" variant="filled" sx={{ width: '100%' }}>
                {t(`feedback:form.warning.${formWarning}`)}
              </Alert>
            )}
          </Grid>
        </ControlledForm>
      }
    />
  );
};

export default PanelDetailForm;
