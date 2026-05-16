import { useTranslation } from 'react-i18next';
import { Alert, Button, Divider, Grid, Typography } from '@mui/material';
import { useDialogStore } from '@/store';
import { introductionContextTypeKeys } from '@/enums';
import {
  ComposedDialog,
  ControlledForm,
  Checkbox,
  Fieldset,
} from '@/components';
import { LocalesMenu } from '@/menu';
import { useIntroductionForm } from './useIntroductionForm';

const IntroductionForm = () => {
  const { t } = useTranslation(['common', 'form']);
  const { introductionDialog, closeIntroductionDialog } = useDialogStore();
  const { form, onSubmit, onCancel, options, onLinkToggle } =
    useIntroductionForm();

  return (
    <>
      <ComposedDialog
        open={!!introductionDialog}
        onClose={closeIntroductionDialog}
        disableBackdropClose
        disableEscapeClose
        disableCloseButton
        maxWidth="md"
        fullWidth
        title={t('form:label.introduction.title')}
        titleSlot={<LocalesMenu prefix="introduction" />}
        actions={
          <>
            <Button color="inherit" variant="outlined" onClick={onCancel}>
              {t('button.skipIntroduction')}
            </Button>
            <Button variant="contained" type="submit" form="introduction-form">
              {t('button.saveAndContinue')}
            </Button>
          </>
        }
        content={
          <ControlledForm
            id="introduction-form"
            form={form}
            onSubmit={onSubmit}
          >
            <Grid container spacing={2}>
              <Grid size={12}>
                <Typography>{t('form:label.introduction.welcome')}</Typography>
              </Grid>

              {introductionDialog === introductionContextTypeKeys.migration && (
                <Grid size={12}>
                  <Alert severity="info" variant="filled" sx={{ mb: 2 }}>
                    {t('form:label.introduction.favorites')}
                  </Alert>
                  <Fieldset title={t('form:label.section.favorites')}>
                    {options.favorites.map((item) => (
                      <Checkbox
                        key={item.id}
                        label={item.label}
                        onChange={() => onLinkToggle('favoritesId', item.id)}
                      />
                    ))}
                  </Fieldset>
                  <Divider sx={{ mt: 2.5 }} />
                </Grid>
              )}

              <Grid size={12}>
                <Fieldset title={t('form:label.section.main')}>
                  {options.main.map((item) => (
                    <Checkbox
                      key={item.id}
                      label={item.label}
                      onChange={() => onLinkToggle('featuredId', item.id)}
                    />
                  ))}
                </Fieldset>
              </Grid>

              <Grid size={12}>
                <Fieldset title={t('form:label.section.social')}>
                  {options.social.map((item) => (
                    <Checkbox
                      key={item.id}
                      label={item.label}
                      onChange={() => onLinkToggle('featuredId', item.id)}
                    />
                  ))}
                </Fieldset>
              </Grid>

              <Grid size={12}>
                <Fieldset title={t('form:label.section.media')}>
                  {options.media.map((item) => (
                    <Checkbox
                      key={item.id}
                      label={item.label}
                      onChange={() => onLinkToggle('featuredId', item.id)}
                    />
                  ))}
                </Fieldset>
              </Grid>

              <Grid size={12}>
                <Fieldset title={t('form:label.section.ai')}>
                  {options.ai.map((item) => (
                    <Checkbox
                      key={item.id}
                      label={item.label}
                      onChange={() => onLinkToggle('featuredId', item.id)}
                    />
                  ))}
                </Fieldset>
              </Grid>

              <Grid size={12}>
                <Fieldset title={t('form:label.section.coding')}>
                  {options.coding.map((item) => (
                    <Checkbox
                      key={item.id}
                      label={item.label}
                      onChange={() => onLinkToggle('featuredId', item.id)}
                    />
                  ))}
                </Fieldset>
              </Grid>

              <Grid size={12}>
                <Fieldset title={t('form:label.section.development')}>
                  {options.development.map((item) => (
                    <Checkbox
                      key={item.id}
                      label={item.label}
                      onChange={() => onLinkToggle('featuredId', item.id)}
                    />
                  ))}
                </Fieldset>
              </Grid>
            </Grid>
          </ControlledForm>
        }
      />
    </>
  );
};

export default IntroductionForm;
