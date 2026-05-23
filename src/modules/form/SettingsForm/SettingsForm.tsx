import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid, Button, Stack } from '@mui/material';
import { useAppPersistentStore, useDialogStore, usePanelsStore } from '@/store';
import { dialogCloseDelayDefault } from '@/constants';
import {
  ComposedDrawer,
  ControlledForm,
  CheckboxField,
  Fieldset,
} from '@/components';
import { useSettingsForm } from './useSettingsForm';

const SettingsForm = () => {
  const { t } = useTranslation(['common', 'form']);
  const { onResetMainPanel, onResetCustomPanels } = usePanelsStore();
  const { onReset } = useAppPersistentStore();
  const { settingsFormOpen, toggleSettingsForm, openConfirmDialog, addToast } =
    useDialogStore();
  const { form, onSubmit } = useSettingsForm();
  const navigate = useNavigate();

  const resetDataHandler = () => {
    openConfirmDialog({
      title: t('feedback.confirm.reset_data.title'),
      content: t('feedback.confirm.reset_data.content'),
      onConfirm: () => {
        navigate('/');
        setTimeout(() => {
          onResetMainPanel();
          onResetCustomPanels();
          onReset();
          toggleSettingsForm();
          addToast({
            severity: 'success',
            title: t('feedback.success.data_reset'),
            autoclose: true,
          });
        }, dialogCloseDelayDefault);
      },
    });
  };

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
              {t('button.save')}
            </Button>
          </>
        }
      >
        <ControlledForm id="settings-form" form={form} onSubmit={onSubmit}>
          <Stack direction="column" spacing={2}>
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
            <Fieldset>
              <Button
                variant="outlined"
                color="error"
                onClick={resetDataHandler}
              >
                {t('button.savedDataReset')}
              </Button>
            </Fieldset>
          </Stack>
        </ControlledForm>
      </ComposedDrawer>
    </>
  );
};

export default SettingsForm;
