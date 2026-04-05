// import { useWatch } from 'react-hook-form';
import { Button, Grid, Divider, Typography } from '@mui/material';
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
  // const { widgets } = useWatch({ control: form.control });

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
            <InputField
              name="label"
              label="Label"
              layout="vertical"
              isFullWidth
              size={{ xs: 12, md: 6 }}
            />
            <InputField
              name="name"
              label="Name"
              layout="vertical"
              isFullWidth
              size={{ xs: 12, md: 6 }}
            />

            <Grid size={12}>
              <Divider />
            </Grid>

            <Grid size={12} container spacing={1}>
              <Typography variant="h6">Widget: Date time</Typography>

              <CheckboxField
                name="widgets.dateTime.active"
                label=""
                fieldLabel="Active"
                layout="vertical"
              />
              <SelectField
                name="widgets.dateTime.timeType"
                label="Time type"
                layout="vertical"
                options={options.dateTime.timeType}
                defaultValue={dateTimeWidgetTimeDefault}
                isFullWidth
                size={{ xs: 12, md: 6 }}
              />
              <CheckboxField
                name="widgets.dateTime.separatorBlink"
                label=""
                fieldLabel="Blinking Semi"
                layout="vertical"
              />
              <CheckboxField
                name="widgets.dateTime.showSeconds"
                label=""
                fieldLabel="Show seconds"
                layout="vertical"
              />

              <CheckboxField
                name="widgets.dateTime.showHolidays"
                label=""
                fieldLabel="Show holidays"
                layout="vertical"
              />
              <CheckboxField
                name="widgets.dateTime.showTomorrowHolidays"
                label=""
                fieldLabel="Show tomorrow holidays"
                layout="vertical"
              />
            </Grid>

            <Grid size={12}>
              <Divider />
            </Grid>

            <Grid size={12} container spacing={1}>
              <Typography variant="h6">Widget: Weather</Typography>

              <CheckboxField
                name="widgets.weather.active"
                label=""
                fieldLabel="Active"
                layout="vertical"
              />
            </Grid>

            <Grid size={12}>
              <Divider />
            </Grid>

            <Grid size={12} container spacing={1}>
              <Typography variant="h6">Widget: Calendar</Typography>

              <CheckboxField
                name="widgets.calendar.active"
                label=""
                fieldLabel="Active"
                layout="vertical"
              />
            </Grid>

            <Grid size={12}>
              <Divider />
            </Grid>

            <Grid size={12} container spacing={1}>
              <Typography variant="h6">Widget: Links</Typography>

              <CheckboxField
                name="widgets.links.active"
                label=""
                fieldLabel="Active"
                layout="vertical"
              />
            </Grid>
          </Grid>
        </ControlledForm>
      }
    />
  );
};

export default PanelDetailForm;
