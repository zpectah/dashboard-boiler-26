import { Grid } from '@mui/material';
import { useDialogStore } from '../../store';
import {
  Drawer,
  ControlledForm,
  SelectField,
  CheckboxField,
} from '../../components';
import { useSettingsForm } from './useSettingsForm';

const SettingsForm = () => {
  const { settingsForm, setSettingsForm } = useDialogStore();
  const { form, options } = useSettingsForm();

  return (
    <Drawer
      anchor="right"
      title="Homepage settings"
      open={settingsForm}
      onClose={() => setSettingsForm(false)}
      width={{
        xs: '100%',
        md: '480px',
      }}
    >
      <ControlledForm form={form}>
        <Grid container spacing={2}>
          <SelectField
            name="panelEffect"
            label="Panel effect"
            options={options.panelEffect}
            isFullWidth
          />
          <Grid size={12} container spacing={1}>
            <CheckboxField
              name="googleLinks"
              label=""
              fieldLabel="Google links"
              layout="vertical"
            />
            <CheckboxField
              name="msLinks"
              label=""
              fieldLabel="Microsoft links"
              layout="vertical"
            />
            <CheckboxField
              name="appleLinks"
              label=""
              fieldLabel="Apple links"
              layout="vertical"
            />
          </Grid>
        </Grid>
      </ControlledForm>
    </Drawer>
  );
};

export default SettingsForm;
