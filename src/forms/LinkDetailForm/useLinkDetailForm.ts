import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDialogStore, useAppStore } from '../../store';
import { usePanels } from '../../hooks';
import type { ILinkDetailForm } from './types';
import { linkDetailFormSchema } from './schema';
import { getDefaultValues, getFormToMaster, getDataToForm } from './helpers';

export const useLinkDetailForm = () => {
  const { t } = useTranslation(['common', 'feedback']);
  const { panel } = useParams();
  const { linkDetailDialog, closeLinkDetailDialog, addToast } =
    useDialogStore();
  const { createPanelLink, updatePanelLink } = useAppStore();
  const { getCurrentPanel } = usePanels();
  const form = useForm<ILinkDetailForm>({
    defaultValues: getDefaultValues(),
    resolver: zodResolver(linkDetailFormSchema),
  });

  const currentPanel = getCurrentPanel(panel);
  const detail = currentPanel?.widgets.links.links.find(
    (item) => item.id === linkDetailDialog,
  );
  const formId = `linkDetailForm_${linkDetailDialog}`;
  const isNew = linkDetailDialog === 'new';

  const submitHandler: SubmitHandler<ILinkDetailForm> = (data) => {
    if (!currentPanel) return;

    const master = getFormToMaster(data);

    // TODO: custom validation

    if (isNew) {
      createPanelLink(currentPanel.id, master);
      addToast({
        title: t('feedback:success.linkCreated'),
        severity: 'success',
        autoclose: true,
      });
    } else {
      updatePanelLink(currentPanel.id, master);
      addToast({
        title: t('feedback:success.linkUpdated'),
        severity: 'success',
        autoclose: true,
      });
    }

    closeLinkDetailDialog();
  };

  useEffect(() => {
    if (isNew) {
      form.reset(getDefaultValues());
    } else if (detail) {
      form.reset(getDataToForm(detail), { keepDirty: true });
    } else {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNew, form, linkDetailDialog]);

  return {
    form,
    formId,
    detail,
    isNew,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
