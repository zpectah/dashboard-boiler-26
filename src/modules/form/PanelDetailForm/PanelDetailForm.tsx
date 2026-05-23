import { useTranslation } from 'react-i18next';
import { useWatch } from 'react-hook-form';
import { Button, Grid, Alert } from '@mui/material';
import { newPanelId } from '@/constants';
import { useDialogStore } from '@/store';
import {
  ComposedDialog,
  ControlledForm,
  InputField,
  CheckboxField,
  SelectField,
  Fieldset,
} from '@/components';
import { usePanelDetailForm } from './usePanelDetailForm';

const PanelDetailForm = () => {
  const { t } = useTranslation(['common', 'form']);
  const { panelDetailId, closePanelDetail } = useDialogStore();
  const { form, onSubmit, options, formWarning } = usePanelDetailForm();

  const dialogTitle =
    panelDetailId === newPanelId ? t('label.create_panel') : t('label.edit');
  const submitLabel =
    panelDetailId === newPanelId ? t('button.create') : t('button.update');

  const datetime = useWatch({
    name: 'widgets.datetime',
    control: form.control,
  });
  const links = useWatch({
    name: 'widgets.links',
    control: form.control,
  });
  const search = useWatch({
    name: 'widgets.search',
    control: form.control,
  });

  return (
    <>
      <ComposedDialog
        maxWidth="sm"
        fullWidth
        open={!!panelDetailId}
        onClose={closePanelDetail}
        title={dialogTitle}
        actions={
          <>
            <Button
              variant="outlined"
              color="inherit"
              onClick={closePanelDetail}
            >
              {t('button.cancel')}
            </Button>
            <Button type="submit" form="panel-detail-form" variant="contained">
              {submitLabel}
            </Button>
          </>
        }
        subcontent={
          <>
            {formWarning && (
              <Alert severity="warning" variant="filled" sx={{ width: '100%' }}>
                {t(`form:message.warning.${formWarning}`)}
              </Alert>
            )}
          </>
        }
        content={
          <ControlledForm
            id="panel-detail-form"
            form={form}
            onSubmit={onSubmit}
          >
            <input type="hidden" {...form.register('id')} />
            <Grid container spacing={2}>
              <Grid container size={12}>
                <InputField
                  name="label"
                  label={t('form:label.panel.label')}
                  placeholder={t('form:placeholder.panel.label')}
                  layout="vertical"
                  isFullWidth
                />
              </Grid>
              <Grid size={12}>
                <Fieldset title={t('form:label.section.widgets.search')}>
                  <Grid container spacing={1}>
                    <CheckboxField
                      name="widgets.search.active"
                      label=""
                      fieldLabel={t('form:label.search.active')}
                      layout="vertical"
                    />
                    <SelectField
                      name="widgets.search.engine"
                      label={t('form:label.search.engine')}
                      placeholder={t('form:placeholder.search.engine')}
                      options={options.engines}
                      layout="vertical"
                      isFullWidth
                      isDisabled={!search?.active}
                    />
                  </Grid>
                </Fieldset>
              </Grid>
              <Grid size={12}>
                <Fieldset title={t('form:label.section.widgets.datetime')}>
                  <Grid container spacing={1}>
                    <CheckboxField
                      name="widgets.datetime.active"
                      label=""
                      fieldLabel={t('form:label.datetime.active')}
                      layout="vertical"
                    />
                    <SelectField
                      name="widgets.datetime.type"
                      label={t('form:label.datetime.type')}
                      placeholder={t('form:placeholder.datetime.type')}
                      options={options.timeType}
                      layout="vertical"
                      isFullWidth
                      isDisabled={!datetime.active}
                    />
                    <CheckboxField
                      name="widgets.datetime.seconds"
                      label=""
                      fieldLabel={t('form:label.datetime.seconds')}
                      layout="vertical"
                      isDisabled={!datetime.active}
                    />
                    <CheckboxField
                      name="widgets.datetime.secondsBlink"
                      label=""
                      fieldLabel={t('form:label.datetime.secondsBlink')}
                      layout="vertical"
                      isDisabled={!datetime.active}
                    />
                    <CheckboxField
                      name="widgets.datetime.date"
                      label=""
                      fieldLabel={t('form:label.datetime.date')}
                      layout="vertical"
                      isDisabled={!datetime.active}
                    />
                    <CheckboxField
                      name="widgets.datetime.fullDate"
                      label=""
                      fieldLabel={t('form:label.datetime.fullDate')}
                      layout="vertical"
                      isDisabled={!datetime.active}
                      isHidden={!datetime.date}
                    />
                    <CheckboxField
                      name="widgets.datetime.weekDay"
                      label=""
                      fieldLabel={t('form:label.datetime.weekDay')}
                      layout="vertical"
                      isDisabled={!datetime.active}
                      isHidden={!datetime.date}
                    />
                    <CheckboxField
                      name="widgets.datetime.weather"
                      label=""
                      fieldLabel={t('form:label.datetime.weather')}
                      layout="vertical"
                      isDisabled={!datetime.active}
                    />
                    <CheckboxField
                      name="widgets.datetime.holidays"
                      label=""
                      fieldLabel={t('form:label.datetime.holidays')}
                      layout="vertical"
                      isDisabled={!datetime.active}
                    />
                    <SelectField
                      name="widgets.datetime.holidaysOrigin"
                      label={t('form:label.datetime.holidaysOrigin')}
                      placeholder={t(
                        'form:placeholder.datetime.holidaysOrigin',
                      )}
                      options={options.holidaysOrigin}
                      layout="vertical"
                      isFullWidth
                      isDisabled={!datetime.active}
                      isHidden={!datetime.holidays}
                    />
                    <CheckboxField
                      name="widgets.datetime.tomorrowHolidays"
                      label=""
                      fieldLabel={t('form:label.datetime.tomorrowHolidays')}
                      layout="vertical"
                      isDisabled={!datetime.active}
                      isHidden={!datetime.holidays}
                    />
                  </Grid>
                </Fieldset>
              </Grid>
              <Grid size={12}>
                <Fieldset title={t('form:label.section.widgets.calendar')}>
                  <Grid container>
                    <CheckboxField
                      name="widgets.calendar.active"
                      label=""
                      fieldLabel={t('form:label.calendar.active')}
                      layout="vertical"
                    />
                  </Grid>
                </Fieldset>
              </Grid>
              <Grid size={12}>
                <Fieldset title={t('form:label.section.widgets.links')}>
                  <Grid container>
                    <CheckboxField
                      name="widgets.links.active"
                      label=""
                      fieldLabel={t('form:label.links.active')}
                      layout="vertical"
                    />
                    <CheckboxField
                      name="widgets.links.icons"
                      label=""
                      fieldLabel={t('form:label.links.icons')}
                      layout="vertical"
                      isDisabled={!links.active}
                    />
                  </Grid>
                </Fieldset>
              </Grid>
            </Grid>
          </ControlledForm>
        }
      />
    </>
  );
};

export default PanelDetailForm;
