import { Button, TextField } from '@mui/material';
import { useDialogStore } from '../../store';
import { ComposedDialog, Checkbox } from '../../components';
import { usePanelDetailForm } from './usePanelDetailForm.ts';

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
        <form
          id={formId}
          className={isMain ? 'is-main' : ''}
          onSubmit={onSubmit}
        >
          <TextField {...form.register('id')} label="ID" fullWidth />
          <TextField {...form.register('name')} label="Name" fullWidth />
          <TextField {...form.register('label')} label="Label" fullWidth />
          <div>
            <Checkbox
              {...form.register('widgets.clockAnalog')}
              label="Clock analog"
            />
            <Checkbox
              {...form.register('widgets.clockNumeric')}
              label="Clock numeric"
            />
            <Checkbox
              {...form.register('widgets.dateTime')}
              label="Date Time"
            />
            <Checkbox {...form.register('widgets.holidays')} label="Holidays" />
            <Checkbox {...form.register('widgets.weather')} label="Weather" />
            <Checkbox {...form.register('widgets.calendar')} label="Calendar" />
            <Checkbox {...form.register('widgets.links')} label="Links" />
          </div>
        </form>
      }
    />
  );
};

export default PanelDetailForm;
