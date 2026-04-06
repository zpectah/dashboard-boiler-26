import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('common');
  const { settingsForm, setSettingsForm } = useDialogStore();
  const { form, options } = useSettingsForm();

  return (
    <Drawer
      anchor="right"
      title={t('common:label.homepageSettings')}
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
            label={t('common:form.label.panelEffect')}
            options={options.panelEffect}
            isFullWidth
            layout="vertical"
          />
          <Grid size={12} container spacing={1}>
            <CheckboxField
              name="googleLinks"
              label=""
              fieldLabel={t('common:features.google.title')}
              layout="vertical"
            />
            <CheckboxField
              name="msLinks"
              label=""
              fieldLabel={t('common:features.microsoft.title')}
              layout="vertical"
            />
            <CheckboxField
              name="appleLinks"
              label=""
              fieldLabel={t('common:features.apple.title')}
              layout="vertical"
            />
          </Grid>
        </Grid>
      </ControlledForm>
    </Drawer>
  );
};

export default SettingsForm;
