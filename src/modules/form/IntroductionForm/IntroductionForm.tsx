import { Button, Grid } from '@mui/material';
import { useDialogStore } from '@/store';
import {
  ComposedDialog,
  ControlledForm,
  Checkbox,
  Fieldset,
} from '@/components';
import { useIntroductionForm } from './useIntroductionForm';

const IntroductionForm = () => {
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
        title="Welcome ..."
        actions={
          <>
            <Button color="inherit" variant="outlined" onClick={onCancel}>
              skip introduction
            </Button>
            <Button variant="contained" type="submit" form="introduction-form">
              save and continue
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
                <Fieldset title="Favorites">
                  {options.favorites.map((item) => (
                    <Checkbox
                      key={item.id}
                      label={item.label}
                      onChange={() => onLinkToggle('favoritesId', item.id)}
                    />
                  ))}
                </Fieldset>
              </Grid>

              <Grid size={12}>
                <Fieldset title="Main">
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
                <Fieldset title="Social">
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
                <Fieldset title="Media">
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
                <Fieldset title="AI">
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
                <Fieldset title="Coding">
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
                <Fieldset title="Development">
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
            ...intro form...{introductionDialog}...
          </ControlledForm>
        }
      />
    </>
  );
};

export default IntroductionForm;
