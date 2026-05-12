import { Button, Grid } from '@mui/material';
import { useDialogStore } from '@/store';
import { ComposedDialog, ControlledForm, Checkbox } from '@/components';
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
            <Grid container>
              {options.favorites.map((item) => (
                <Checkbox
                  key={item.id}
                  label={item.label}
                  onChange={() => onLinkToggle('favoritesId', item.id)}
                />
              ))}
            </Grid>
            ...intro form...{introductionDialog}...
          </ControlledForm>
        }
      />
    </>
  );
};

export default IntroductionForm;
