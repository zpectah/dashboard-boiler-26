import { useCallback, useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppStore, useDialogStore } from '../../store';
import type { IPanelDetailForm } from './types';
import { panelDetailFormSchema } from './schema';
import { getDefaultValues, getDataToForm, getFormToMaster } from './helpers';
import { usePanels } from '../../hooks';

export const usePanelDetailForm = () => {
  const [isMain, setIsMain] = useState(false);

  const { onUpdatePanel, onCreatePanel } = useAppStore();
  const { panelDialog, onClosePanelDialog } = useDialogStore();
  const { getPanelById } = usePanels();
  const form = useForm<IPanelDetailForm>({
    defaultValues: getDefaultValues(),
    resolver: zodResolver(panelDetailFormSchema),
  });

  const detail = getPanelById(panelDialog);
  const formId = `panelDetailForm_${panelDialog}`;

  const submitHandler: SubmitHandler<IPanelDetailForm> = useCallback(
    (data) => {
      if (!panelDialog) return;

      const master = getFormToMaster(data);

      console.log('on submit', data, master);

      if (panelDialog === 'new') {
        onCreatePanel(master);
        // TODO: create callback message
      } else {
        onUpdatePanel(master);
        // TODO: create callback message
      }

      onClosePanelDialog();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [panelDialog],
  );

  useEffect(() => {
    if (!panelDialog) return;

    if (panelDialog === 'new') {
      form.reset(getDefaultValues());
    } else {
      // const detail = getPanelById(panelDialog);

      setIsMain(!!detail?.isMain);
      form.reset(getDataToForm(detail));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, panelDialog]);

  return {
    form,
    formId,
    isMain,
    isNew: panelDialog === 'new',
    detail,
    onSubmit: form.handleSubmit(submitHandler),
  };
};
