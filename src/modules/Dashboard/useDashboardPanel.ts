import { useState } from 'react';
import type { Panel } from '../../types';
import { dashboardDefaultPanel } from './constants';

export const useDashboardPanel = () => {
  const [currentPanel, setCurrentPanel] = useState<Panel>(
    dashboardDefaultPanel,
  );

  const setPanelHandler = (panel: Panel) => {
    setCurrentPanel(panel);
  };

  return {
    currentPanel,
    onCurrentPanelChange: setPanelHandler,
  };
};
