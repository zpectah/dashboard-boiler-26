import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  datetimeWidgetHolidaysOriginKeysArray,
  datetimeWidgetTypeKeysArray,
  mainPanelId,
  newPanelId,
} from '@/constants';
import { useDialogStore, usePanelsStore } from '../../../store';
import { panelDetailFormSchema } from './schema';
import type { IPanelDetailForm } from './types';
import {
  getDefaultValues,
  parseMasterData,
  parseObjectValues,
} from './helpers';

export const usePanelDetailForm = () => {
  const [formWarning, setFormWarning] = useState<string | null>(null);

  const { t } = useTranslation();
  const { panelDetailId, closePanelDetail, addToast } = useDialogStore();
  const { main, custom, onPanelCreate, onPanelPatch } = usePanelsStore();
  const form = useForm<IPanelDetailForm>({
    resolver: zodResolver(panelDetailFormSchema),
    defaultValues: getDefaultValues(),
  });
  const navigate = useNavigate();

  const fieldOptions = {
    timeType: datetimeWidgetTypeKeysArray.map((item) => ({
      id: item,
      value: item,
      label: t(`form:options.timeType.${item}`),
    })),
    holidaysOrigin: datetimeWidgetHolidaysOriginKeysArray.map((item) => ({
      id: item,
      value: item,
      label: t(`form:options.holidaysOrigin.${item}`),
    })),
  };

  const submitHandler: SubmitHandler<IPanelDetailForm> = (data) => {
    if (!panelDetailId) return;

    setFormWarning(null);

    const master = parseMasterData(data);

    if (
      !master.widgets.datetime.active &&
      !master.widgets.calendar.active &&
      !master.widgets.links.active
    ) {
      setFormWarning('one_widget_at_least');

      return;
    }

    if (panelDetailId === newPanelId) {
      onPanelCreate(master);
      addToast({
        severity: 'success',
        title: t('feedback.success.panel_created'),
        autoclose: true,
      });
      setTimeout(() => navigate(`panel/${master.id}`), 250);
    } else {
      onPanelPatch(panelDetailId, master);
      addToast({
        severity: 'success',
        title: t('feedback.success.panel_updated'),
        autoclose: true,
      });
    }

    closePanelDetail();
  };

  useEffect(() => {
    if (panelDetailId) {
      if (panelDetailId === newPanelId) {
        form.reset(getDefaultValues());
      } else if (panelDetailId === mainPanelId) {
        form.reset(parseObjectValues(main));
      } else {
        const current = custom.find((item) => item.id === panelDetailId);
        if (current) form.reset(parseObjectValues(current));
      }
    } else {
      form.reset();
    }
  }, [custom, form, main, panelDetailId]);

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
    options: fieldOptions,
    formWarning,
  };
};
