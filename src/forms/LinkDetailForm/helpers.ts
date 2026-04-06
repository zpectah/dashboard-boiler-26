import type { UserLink } from '../../types';
import type { ILinkDetailForm } from './types';
import { getRandomId } from '../../utils';

export const getDefaultValues = (): ILinkDetailForm => {
  return Object.assign({
    id: getRandomId(12),
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
