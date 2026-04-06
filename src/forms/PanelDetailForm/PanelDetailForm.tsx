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
  const { t } = useTranslation(['feedback']);
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
      title={isNew ? 'New panel' : detail?.label}
      actions={
        <>
          <Button onClick={onClosePanelDialog} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" form={formId} variant="contained">
            {isNew ? 'Create' : 'Update'}
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
          <Grid container spacing={2}>
            <Grid size={12} container spacing={2}>
              <InputField
                name="label"
                label="Label"
                layout="vertical"
                isFullWidth
                isRequired
                size={{ xs: 12, md: 6 }}
              />
              <InputField
                name="name"
                label="Name"
                layout="vertical"
                isFullWidth
                isRequired
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
                {t('feedback:form.warning.at_least_one_widget')}
              </Alert>
            )}
          </Grid>
        </ControlledForm>
      }
    />
  );
};

export default PanelDetailForm;
