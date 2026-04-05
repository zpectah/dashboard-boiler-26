import { createContext, useContext } from 'react';
import type { Panel } from '../../types';
import { dashboardDefaultPanel } from './constants';

interface IDashboardContext {
  currentPanel: Panel;
  onCurrentPanelChange: (panel: Panel) => void;
}

const defaultContext: IDashboardContext = {
  currentPanel: dashboardDefaultPanel,
  onCurrentPanelChange: () => null,
};

export const DashboardContext = createContext(defaultContext);

export const DashboardContextProvider = DashboardContext.Provider;
export const DashboardContextConsumer = DashboardContext.Consumer;

export const useDashboardContext = () =>
  useContext<IDashboardContext>(DashboardContext);
