import { create } from 'zustand';
import type { IConfirmDialog } from '../types';

interface IDialogStore {
  panelDialog: string | null;
  onOpenPanelDialog: (id: string | 'new') => void;
  onClosePanelDialog: () => void;

  confirmDialog: IConfirmDialog | null;
  onOpenConfirmDialog: (dialog: IConfirmDialog | null) => void;
  onCloseConfirmDialog: () => void;
}

const useDialogStore = create<IDialogStore>((set) => {
  const panelDialog: string | null = null;
  const confirmDialog: IConfirmDialog | null = null;

  const openPanelDialogHandler = (id: string | 'new') =>
    set({ panelDialog: id });

  const closePanelDialogHandler = () => set({ panelDialog: null });

  const openConfirmDialogHandler = (dialog: IConfirmDialog | null) =>
    set({ confirmDialog: dialog });

  const closeConfirmDialogHandler = () => set({ confirmDialog: null });

  return {
    panelDialog,
    onOpenPanelDialog: openPanelDialogHandler,
    onClosePanelDialog: closePanelDialogHandler,

    confirmDialog,
    onOpenConfirmDialog: openConfirmDialogHandler,
    onCloseConfirmDialog: closeConfirmDialogHandler,
  };
});

export default useDialogStore;
