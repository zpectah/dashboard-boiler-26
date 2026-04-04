import { panelEffectKeys } from '../enums';

export const mainPanelName = 'home';

export const panelEffectKeysArray = [...Object.keys(panelEffectKeys)] as [
  string,
  ...string[],
];

export const panelEffectDefault = panelEffectKeys.grow;
