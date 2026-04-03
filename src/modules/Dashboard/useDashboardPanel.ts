import { useState } from 'react';
import type { Panel } from '../../types';
import { DashboardDefaultPanel } from './constants';

export const useDashboardPanel = () => {
  const [currentPanel, setCurrentPanel] = useState<Panel>(
    DashboardDefaultPanel,
  );

  const setPanelHandler = (panel: Panel) => {
    setCurrentPanel(panel);
  };

  return {
    currentPanel,
    onCurrentPanelChange: setPanelHandler,
  };
};
