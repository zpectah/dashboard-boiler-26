import { panelEffectDefault } from '../../constants';
import type { ISettingsForm, SettingsFormMaster } from './types';

export const getDefaultValues = (): ISettingsForm => {
  return Object.assign({
    panelEffect: panelEffectDefault,
    googleLinks: false,
    msLinks: false,
    appleLinks: false,
  });
};

export const getDataToForm = (data: SettingsFormMaster): ISettingsForm => {
  return Object.assign({ ...data });
};

export const getFormToMaster = (data: ISettingsForm): SettingsFormMaster => {
  const master = Object.assign({ ...data });

  return master;
};
