import type { UserLink } from '@/types';
import { getRandomId } from '@/utils';
import type { ILinkDetailForm } from './types';

export const getDefaultValues = (): ILinkDetailForm => {
  return Object.assign({
    id: getRandomId(8),
    label: '',
    href: '',
    order: 0,
  });
};

export const parseObjectValues = (data: UserLink): ILinkDetailForm => {
  return Object.assign({
    ...data,
  });
};

export const parseMasterData = (data: ILinkDetailForm): UserLink => {
  const master = Object.assign({
    ...data,
  });

  return master;
};
