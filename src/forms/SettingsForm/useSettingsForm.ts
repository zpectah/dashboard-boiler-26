import { useCallback, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { panelEffectKeys } from '../../enums';
import { useAppStore, useDialogStore } from '../../store';
import type { ISettingsForm } from './types';
import { settingsFormSchema } from './schema';
import { getDataToForm, getDefaultValues, getFormToMaster } from './helpers';

export const useSettingsForm = () => {
  const { addToast } = useDialogStore();
  const { panelEffect, features, onChangePanelEffect, setFeatures } =
    useAppStore();
  const form = useForm<ISettingsForm>({
    defaultValues: getDefaultValues(),
    resolver: zodResolver(settingsFormSchema),
  });

  const submitHandler: SubmitHandler<ISettingsForm> = useCallback(
    (data) => {
      const master = getFormToMaster(data);

      onChangePanelEffect(master.panelEffect);
      setFeatures({
        googleLinks: master.googleLinks,
        msLinks: master.msLinks,
        appleLinks: master.appleLinks,
      });
      addToast({
        title: 'Changes was successfully saved', // TODO #i18n
        severity: 'success',
        autoclose: true,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onChangePanelEffect, setFeatures],
  );

  const options = {
    panelEffect: [
      {
        id: panelEffectKeys.fade,
        value: panelEffectKeys.fade,
        label: 'Fade', // TODO #i18n
      },
      {
        id: panelEffectKeys.grow,
        value: panelEffectKeys.grow,
        label: 'Grow', // TODO #i18n
      },
      {
        id: panelEffectKeys.slide,
        value: panelEffectKeys.slide,
        label: 'Slide', // TODO #i18n
      },
    ],
  };

  useEffect(() => {
    if (panelEffect && features) {
      form.reset(getDataToForm({ panelEffect, ...features }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const subscription = form.watch(() => {
      form.handleSubmit(submitHandler)();
    });

    return () => subscription.unsubscribe();
  }, [form, submitHandler]);

  return {
    form,
    options,
  };
};
