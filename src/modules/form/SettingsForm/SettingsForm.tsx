import { useTranslation } from 'react-i18next';
import { Grid, Button } from '@mui/material';
import { useDialogStore } from '@/store';
import {
  ComposedDrawer,
  ControlledForm,
  CheckboxField,
  Fieldset,
} from '@/components';
import { useSettingsForm } from './useSettingsForm';

const SettingsForm = () => {
  const { t } = useTranslation(['common', 'form']);
  const { settingsFormOpen, toggleSettingsForm } = useDialogStore();
  const { form, onSubmit } = useSettingsForm();

  return (
    <>
      <ComposedDrawer
        open={settingsFormOpen}
        onClose={toggleSettingsForm}
        anchor="right"
        width="350px"
        title="Settings"
        actions={
          <>
            <Button
              variant="outlined"
              color="inherit"
              onClick={toggleSettingsForm}
            >
              {t('button.cancel')}
            </Button>
            <Button type="submit" form="settings-form" variant="contained">
              {t('button.update')}
            </Button>
          </>
        }
      >
        <ControlledForm id="settings-form" form={form} onSubmit={onSubmit}>
          <Fieldset title={t('form:label.section.links')}>
            <Grid container spacing={1}>
              <CheckboxField
                name="linksGoogle"
                label=""
                fieldLabel={t('form:label.linksGoogle')}
                layout="vertical"
              />
              <CheckboxField
                name="linksApple"
                label=""
                fieldLabel={t('form:label.linksApple')}
                layout="vertical"
              />
              <CheckboxField
                name="linksMicrosoft"
                label=""
                fieldLabel={t('form:label.linksMicrosoft')}
                layout="vertical"
              />
            </Grid>
          </Fieldset>
        </ControlledForm>
      </ComposedDrawer>
    </>
  );
};

export default SettingsForm;
