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
  const [formWarning, setFormWarning] = useState<string | null>(null);

  const { t } = useTranslation(['common', 'feedback']);
  const { customPanels, onUpdatePanel, onCreatePanel } = useAppStore();
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

    setFormWarning(null);

    const master = getFormToMaster(data);
    const duplicity = customPanels.some(
      (item) => item.name === master.name && item.id !== master.id,
    );

    if (duplicity) {
      form.setError('name', {
        message: t('feedback:form.error.duplicity_name'),
      });

      return;
    }

    if (
      !master.widgets.dateTime.active &&
      !master.widgets.calendar.active &&
      !master.widgets.weather.active &&
      !master.widgets.links.active
    ) {
      setFormWarning('at_least_one_widget');

      return;
    }

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
          label: t('common:form.options.timeType.analog'),
        },
        {
          id: dateTimeWidgetTimeKeys.numeric,
          value: dateTimeWidgetTimeKeys.numeric,
          label: t('common:form.options.timeType.numeric'),
        },
      ],
      holidaysOrigin: [
        {
          id: dateTimeWidgetHolidaysOriginKeys.world,
          value: dateTimeWidgetHolidaysOriginKeys.world,
          label: t('common:form.options.holidaysOrigin.world'),
        },
        {
          id: dateTimeWidgetHolidaysOriginKeys.eu,
          value: dateTimeWidgetHolidaysOriginKeys.eu,
          label: t('common:form.options.holidaysOrigin.eu'),
        },
        {
          id: dateTimeWidgetHolidaysOriginKeys.us,
          value: dateTimeWidgetHolidaysOriginKeys.us,
          label: t('common:form.options.holidaysOrigin.us'),
        },
        {
          id: dateTimeWidgetHolidaysOriginKeys.cs,
          value: dateTimeWidgetHolidaysOriginKeys.cs,
          label: t('common:form.options.holidaysOrigin.cs'),
        },
        {
          id: dateTimeWidgetHolidaysOriginKeys.sk,
          value: dateTimeWidgetHolidaysOriginKeys.sk,
          label: t('common:form.options.holidaysOrigin.sk'),
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
    formWarning,
  };
};
