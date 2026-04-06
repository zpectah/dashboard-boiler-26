import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDialogStore, useAppStore } from '../../store';
import { usePanels } from '../../hooks';
import type { ILinkDetailForm } from './types';
import { linkDetailFormSchema } from './schema';
import { getDefaultValues, getFormToMaster, getDataToForm } from './helpers';

export const useLinkDetailForm = () => {
  const { panel } = useParams();
  const { linkDetailDialog, closeLinkDetailDialog } = useDialogStore();
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
    const master = getFormToMaster(data);

    if (!currentPanel) return;

    if (isNew) {
      createPanelLink(currentPanel.id, master);
    } else {
      updatePanelLink(currentPanel.id, master);
    }

    closeLinkDetailDialog();

    /* TODO: response */
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
