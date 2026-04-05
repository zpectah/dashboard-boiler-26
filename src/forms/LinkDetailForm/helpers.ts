import type { UserLink } from '../../types';
import type { ILinkDetailForm } from './types';

export const getDefaultValues = (): ILinkDetailForm => {
  return Object.assign({
    id: 'new',
    url: 'https://',
    label: '',
    order: 0,
  });
};

export const getDataToForm = (data: UserLink): ILinkDetailForm => {
  return Object.assign({
    ...data,
  });
};

export const getFormToMaster = (data: ILinkDetailForm): UserLink => {
  const master = Object.assign({ ...data });

  return master;
};
