import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppStore, useDialogStore } from '../../store';
import {
  dateTimeWidgetHolidaysOriginKeys,
  dateTimeWidgetTimeKeys,
} from '../../enums';
import { usePanels } from '../../hooks';
import type { IPanelDetailForm } from './types';
import { panelDetailFormSchema } from './schema';
import { getDefaultValues, getDataToForm, getFormToMaster } from './helpers';

export const usePanelDetailForm = () => {
  const [isMain, setIsMain] = useState(false);

  const { t } = useTranslation(['common', 'feedback']);
  const { onUpdatePanel, onCreatePanel } = useAppStore();
  const { panelDialog, onClosePanelDialog, addToast } = useDialogStore();
  const { getPanelById } = usePanels();
  const form = useForm<IPanelDetailForm>({
    defaultValues: getDefaultValues(),
    resolver: zodResolver(panelDetailFormSchema),
  });

  const detail = getPanelById(panelDialog);
  const formId = `panelDetailForm_${panelDialog}`;
  const isNew = panelDialog === 'new';

  const submitHandler: SubmitHandler<IPanelDetailForm> = (data) => {
    if (!panelDialog) return;

    const master = getFormToMaster(data);

    // TODO: custom validation

    if (isNew) {
      onCreatePanel(master);
      addToast({
        title: t('feedback:success.panelCreated'),
        severity: 'success',
        autoclose: true,
      });
    } else {
      onUpdatePanel(master);
      addToast({
        title: t('feedback:success.panelUpdated'),
        severity: 'success',
        autoclose: true,
      });
    }

    onClosePanelDialog();
  };

  const options = {
    dateTime: {
      timeType: [
        {
          id: dateTimeWidgetTimeKeys.analog,
          value: dateTimeWidgetTimeKeys.analog,
          label: 'analog', // TODO #i18n
        },
        {
          id: dateTimeWidgetTimeKeys.numeric,
          value: dateTimeWidgetTimeKeys.numeric,
          label: 'numeric', // TODO #i18n
        },
      ],
      holidaysOrigin: [
        {
          id: dateTimeWidgetHolidaysOriginKeys.world,
          value: dateTimeWidgetHolidaysOriginKeys.world,
          label: 'world', // TODO #i18n
        },
        {
          id: dateTimeWidgetHolidaysOriginKeys.eu,
          value: dateTimeWidgetHolidaysOriginKeys.eu,
          label: 'eu', // TODO #i18n
        },
        {
          id: dateTimeWidgetHolidaysOriginKeys.us,
          value: dateTimeWidgetHolidaysOriginKeys.us,
          label: 'us', // TODO #i18n
        },
        {
          id: dateTimeWidgetHolidaysOriginKeys.cs,
          value: dateTimeWidgetHolidaysOriginKeys.cs,
          label: 'cs', // TODO #i18n
        },
        {
          id: dateTimeWidgetHolidaysOriginKeys.sk,
          value: dateTimeWidgetHolidaysOriginKeys.sk,
          label: 'sk', // TODO #i18n
        },
      ],
    },
  };

  useEffect(() => {
    if (!panelDialog) return;

    if (isNew) {
      form.reset(getDefaultValues());
    } else if (detail) {
      setIsMain(!!detail?.isMain);
      form.reset(getDataToForm(detail), { keepDirty: true });
    } else {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNew, form, panelDialog]);

  return {
    form,
    formId,
    isMain,
    isNew,
    detail,
    options,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
