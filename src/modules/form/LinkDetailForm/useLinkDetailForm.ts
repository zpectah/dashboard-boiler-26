import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Panel } from '@/types';
import { mainPanelId, newLinkId } from '@/constants';
import { useDialogStore, usePanelsStore } from '../../../store';
import type { ILinkDetailForm } from './types';
import { linkDetailFormSchema } from './schema';
import {
  getDefaultValues,
  parseMasterData,
  parseObjectValues,
} from './helpers';

export const useLinkDetailForm = () => {
  const { t } = useTranslation();
  const { panel } = useParams();
  const { main, custom, onLinkCreate, onLinkPatch } = usePanelsStore();
  const { linkDetailId, closeLinkDetail, addToast } = useDialogStore();
  const form = useForm<ILinkDetailForm>({
    resolver: zodResolver(linkDetailFormSchema),
    defaultValues: getDefaultValues(),
  });

  const parentPanelId = !panel ? mainPanelId : panel;
  const currentPanel = useMemo(
    () =>
      parentPanelId === mainPanelId
        ? main
        : (custom.find((item) => item.id === parentPanelId) as Panel),
    [main, custom, parentPanelId],
  );

  const fieldOptions = {};

  const submitHandler: SubmitHandler<ILinkDetailForm> = (data) => {
    const master = parseMasterData(data);

    if (linkDetailId === newLinkId) {
      onLinkCreate(parentPanelId, master);
      addToast({
        severity: 'success',
        title: t('feedback.success.link_created'),
        autoclose: true,
      });
    } else {
      onLinkPatch(parentPanelId, master);
      addToast({
        severity: 'success',
        title: t('feedback.success.link_updated'),
        autoclose: true,
      });
    }

    closeLinkDetail();
  };

  useEffect(() => {
    if (linkDetailId) {
      if (linkDetailId === newLinkId) {
        form.reset(getDefaultValues());
      } else {
        const currentLink = currentPanel.widgets.links.links.find(
          (item) => item.id === linkDetailId,
        );

        if (currentLink) form.reset(parseObjectValues(currentLink));
      }
    } else {
      form.reset();
    }
  }, [currentPanel, form, linkDetailId]);

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
    options: fieldOptions,
  };
};
