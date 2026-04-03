import { Button, Grid } from '@mui/material';
import { useDialogStore } from '../../store';
import {
  ComposedDialog,
  ControlledForm,
  InputField,
  CheckboxField,
} from '../../components';
import { usePanelDetailForm } from './usePanelDetailForm';

const PanelDetailForm = () => {
  const { panelDialog, onClosePanelDialog } = useDialogStore();
  const { form, formId, isMain, isNew, detail, onSubmit } =
    usePanelDetailForm();

  return (
    <ComposedDialog
      open={!!panelDialog}
      onClose={onClosePanelDialog}
      maxWidth="sm"
      fullWidth
      title={isNew ? 'New panel' : detail?.label}
      actions={
        <>
          <Button onClick={onClosePanelDialog} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" form={formId} variant="contained">
            Submit
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
            <InputField
              name="name"
              label="Name"
              layout="vertical"
              isFullWidth
            />

            <InputField
              name="label"
              label="Label"
              layout="vertical"
              isFullWidth
            />
          </Grid>

          <Grid size={12} container>
            <>
              <CheckboxField name="widgets.clockAnalog" label="Clock analog" />
              <CheckboxField
                name="widgets.clockNumeric"
                label="Clock numeric"
              />
              <CheckboxField name="widgets.dateTime" label="Date Time" />
              <CheckboxField name="widgets.holidays" label="Holidays" />
              <CheckboxField name="widgets.weather" label="Weather" />
              <CheckboxField name="widgets.calendar" label="Calendar" />
              <CheckboxField name="widgets.links" label="Links" />
            </>
          </Grid>
        </ControlledForm>
      }
    />
  );
};

export default PanelDetailForm;
