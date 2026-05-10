import type { ISettingsForm } from './types';

export const parseObjectValues = (data: ISettingsForm): ISettingsForm => {
  return Object.assign({
    ...data,
  });
};

export const parseMasterData = (data: ISettingsForm): ISettingsForm => {
  const master = Object.assign({
    ...data
  });

  return master;
};
