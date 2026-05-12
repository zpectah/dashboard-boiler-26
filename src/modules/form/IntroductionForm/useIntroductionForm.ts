import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppPersistentStore, useDialogStore } from '@/store';
import type { UserLinks, V25MigrationData } from '@/types';
import { introductionContextTypeKeys } from '@/enums';
import type { IIntroductionForm } from './types';
import { introductionFormSchema } from './schema';
import { links } from '../../../data';

export const useIntroductionForm = () => {
  const { introduction } = useAppPersistentStore();
  const { openIntroductionDialog, closeIntroductionDialog } = useDialogStore();
  const form = useForm<IIntroductionForm>({
    resolver: zodResolver(introductionFormSchema),
    defaultValues: {
      favoritesId: [],
      featuredId: [],
    },
  });

  /* 1. check data for migration */
  const oldData = localStorage.getItem('CONTENT');
  const oldDataJson = oldData
    ? (JSON.parse(oldData) as V25MigrationData)
    : null;

  const [favorites] = useState<UserLinks>(() => [
    ...(oldDataJson?.favorites?.items ?? []),
  ]);

  /* 2. open introduction */

  const options = {
    favorites: favorites.map((item) => ({
      id: item.id,
      value: item.id,
      label: item.label,
    })),
  };

  const linkToggleHandler = (name: keyof IIntroductionForm, id: string) => {
    const fields = [...form.getValues(name)];
    const index = fields.findIndex((field) => field === id);

    if (index > -1) {
      form.setValue(
        name,
        fields.filter((item) => id !== item),
      );
    } else {
      form.setValue(name, [...fields, id]);
    }
  };

  const submitHandler: SubmitHandler<IIntroductionForm> = (data) => {
    const pickedFavorites = favorites.filter((item) =>
      data.favoritesId.includes(item.id),
    );
    const pickedFeatured = links.featured.main.filter((item) =>
      data.featuredId.includes(item.id),
    );

    const linksToImportRaw = [...pickedFavorites, ...pickedFeatured];
    const linksToImport = linksToImportRaw.map((item) => ({
      id: item.id,
      label: item.label,
      order: Number(item.order),
    }));

    console.log(
      'on submit',
      data,
      pickedFavorites,
      pickedFeatured,
      linksToImport,
    );

    // TODO: delete oldData storage
  };

  const cancelHandler = () => {
    console.log('cancel handler ');
    // TODO: continue without setting links or migartion data

    closeIntroductionDialog();
  };

  useEffect(() => {
    if (!introduction) {
      if (oldDataJson) {
        console.log('OLD data found!!!');
        openIntroductionDialog(introductionContextTypeKeys.migration);
      } else {
        console.log('OLD data not found');
        openIntroductionDialog(introductionContextTypeKeys.new);
      }
    }
  }, [introduction, oldDataJson, openIntroductionDialog]);

  return {
    form,
    onSubmit: form.handleSubmit(submitHandler),
    onCancel: cancelHandler,
    options,
    onLinkToggle: linkToggleHandler,
  };
};
