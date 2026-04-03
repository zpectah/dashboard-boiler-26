import { Button, Grid } from '@mui/material';
import { useDialogStore } from '../../store';
import { dateTimeWidgetTimeDefault } from '../../constants';
import {
  ComposedDialog,
  ControlledForm,
  InputField,
  CheckboxField,
  SelectField,
} from '../../components';
import { usePanelDetailForm } from './usePanelDetailForm';

const PanelDetailForm = () => {
  const { panelDialog, onClosePanelDialog } = useDialogStore();
  const { form, formId, isMain, isNew, detail, options, onSubmit } =
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

            <Grid size={12} container spacing={1}>
              <CheckboxField name="widgets.dateTime.active" label="Date Time" />
              <SelectField
                name="widgets.dateTime.type"
                label="Time type"
                layout="vertical"
                options={options.dateTime.type}
                defaultValue={dateTimeWidgetTimeDefault}
                isFullWidth
              />
              <CheckboxField
                name="widgets.dateTime.blinkingSemi"
                label="Date Time: blinkingSemi"
              />

              <CheckboxField name="widgets.holidays.active" label="Holidays" />
              <CheckboxField
                name="widgets.holidays.showTomorrow"
                label="Holidays: showTomorrow"
              />

              <CheckboxField name="widgets.weather.active" label="Weather" />
              <CheckboxField name="widgets.calendar.active" label="Calendar" />
              <CheckboxField name="widgets.links.active" label="Links" />
            </Grid>
          </Grid>
        </ControlledForm>
      }
    />
  );
};

export default PanelDetailForm;
