import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppPersistentStore, useDialogStore } from '@/store';
import type { ISettingsForm } from './types';
import { settingsFormSchema } from './schema';
import { parseMasterData, parseObjectValues } from './helpers';

export const useSettingsForm = () => {
  const { t } = useTranslation();
  const { addToast, toggleSettingsForm } = useDialogStore();
  const { linksGoogle, linksApple, linksMicrosoft, onPatch } =
    useAppPersistentStore();
  const form = useForm<ISettingsForm>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {},
  });

  const submitHandler: SubmitHandler<ISettingsForm> = (data) => {
    const master = parseMasterData(data);

    onPatch(master);
    toggleSettingsForm();
    addToast({
      severity: 'success',
      title: t('feedback.success.data_updated'),
      autoclose: true,
    });
  };

  useEffect(() => {
    const store = { linksGoogle, linksApple, linksMicrosoft };

    if (store) {
      form.reset(parseObjectValues(store));
    }
  }, [form, linksGoogle, linksApple, linksMicrosoft]);

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
