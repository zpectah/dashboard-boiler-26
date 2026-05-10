import type { AppPersistentStoreData } from '@/types';
import type { ISettingsForm } from './types';

export const parseObjectValues = (
  data: AppPersistentStoreData,
): ISettingsForm => {
  return Object.assign({
    ...data,
  });
};

export const parseMasterData = (
  data: ISettingsForm,
): AppPersistentStoreData => {
  const master = Object.assign({
    ...data,
  });

  return master;
};
