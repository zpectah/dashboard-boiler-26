import type { AppPersistentStoreData } from '@/types';
import type { ISettingsForm } from './types';

export const parseObjectValues = (
  data: AppPersistentStoreData,
): ISettingsForm => {
  return Object.assign({
    linksGoogle: data.linksGoogle,
    linksApple: data.linksApple,
    linksMicrosoft: data.linksMicrosoft,
  });
};

export const parseMasterData = (
  data: ISettingsForm,
  timestamp: string,
  introduction: boolean,
): AppPersistentStoreData => {
  const master = {
    ...data,
    timestamp,
    introduction,
  };

  return Object.assign(master);
};
