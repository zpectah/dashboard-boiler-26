import type { Panel } from '../../types';
import type { IPanelDetailForm } from './types';
import { getRandomId } from '../../utils';

export const getDefaultValues = (): IPanelDetailForm => {
  return Object.assign({
    id: getRandomId(12),
    name: '',
    label: '',
    widgets: {
      calendar: true,
      clockAnalog: true,
      clockNumeric: true,
      dateTime: true,
      holidays: true,
      links: true,
      weather: true,
    },
  });
};

export const getDataToForm = (panel: Panel | undefined): IPanelDetailForm => {
  return Object.assign({
    ...panel,
  });
};

export const getFormToMaster = (data: IPanelDetailForm): Panel => {
  const master = Object.assign({
    ...data,
  });

  return master;
};
