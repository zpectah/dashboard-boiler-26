import { create } from 'zustand';
import type { IConfirmDialog } from '../types';

interface IDialogStore {
  panelDialog: string | null;
  onOpenPanelDialog: (id: string | 'new') => void;
  onClosePanelDialog: () => void;
  confirmDialog: IConfirmDialog | null;
  onOpenConfirmDialog: (dialog: IConfirmDialog | null) => void;
  onCloseConfirmDialog: () => void;
  googleLinks: boolean;
  setGoogleLinks: (open: boolean) => void;
  appleLinks: boolean;
  setAppleLinks: (open: boolean) => void;
  microsoftLinks: boolean;
  setMicrosoftLinks: (open: boolean) => void;
  settingsForm: boolean;
  setSettingsForm: (open: boolean) => void;
}

const useDialogStore = create<IDialogStore>((set) => {
  const panelDialog: string | null = null;
  const confirmDialog: IConfirmDialog | null = null;
  const googleLinks = false;
  const appleLinks = false;
  const microsoftLinks = false;
  const settingsForm = false;

  const openPanelDialogHandler = (id: string | 'new') =>
    set({ panelDialog: id });

  const closePanelDialogHandler = () => set({ panelDialog: null });

  const openConfirmDialogHandler = (dialog: IConfirmDialog | null) =>
    set({ confirmDialog: dialog });

  const closeConfirmDialogHandler = () => set({ confirmDialog: null });

  const setGoogleLinksHandler = (open: boolean) => set({ googleLinks: open });

  const setAppleLinksHandler = (open: boolean) => set({ appleLinks: open });

  const setMicrosoftLinksHandler = (open: boolean) =>
    set({ microsoftLinks: open });

  const setSettingsFormHandler = (open: boolean) => set({ settingsForm: open });

  return {
    panelDialog,
    onOpenPanelDialog: openPanelDialogHandler,
    onClosePanelDialog: closePanelDialogHandler,
    confirmDialog,
    onOpenConfirmDialog: openConfirmDialogHandler,
    onCloseConfirmDialog: closeConfirmDialogHandler,
    googleLinks,
    setGoogleLinks: setGoogleLinksHandler,
    appleLinks,
    setAppleLinks: setAppleLinksHandler,
    microsoftLinks,
    setMicrosoftLinks: setMicrosoftLinksHandler,
    settingsForm,
    setSettingsForm: setSettingsFormHandler,
  };
});

export default useDialogStore;
