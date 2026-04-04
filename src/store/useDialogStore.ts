import { create } from 'zustand';
import type { IConfirmDialog, IToastsItem, Toasts } from '../types';
import { getRandomId } from '../utils';
import { toastsItemSeverityKeys } from '../enums';

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
  toasts: Toasts;
  addToast: (toast: IToastsItem) => void;
  removeToast: (id: string) => void;
}

const useDialogStore = create<IDialogStore>((set, get) => {
  const panelDialog: string | null = null;
  const confirmDialog: IConfirmDialog | null = null;
  const googleLinks = false;
  const appleLinks = false;
  const microsoftLinks = false;
  const settingsForm = false;
  const toasts: Toasts = [];

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

  const removeToastHandler = (id: string) => {
    const tmpToasts = [...get().toasts];
    const index = tmpToasts.findIndex((item) => item.id === id);

    if (index > -1) tmpToasts.splice(index, 1);

    set({ toasts: tmpToasts });
  };

  const addToastHandler = ({
    title,
    description,
    severity,
    autoclose,
  }: IToastsItem) => {
    const tmpToasts = [...get().toasts];
    const id = getRandomId();

    tmpToasts.push({
      id,
      title,
      description,
      severity: severity ?? toastsItemSeverityKeys.info,
    });

    if (autoclose) {
      const timeout = typeof autoclose === 'number' ? autoclose : 3500;

      setTimeout(() => removeToastHandler(id), timeout);
    }

    set({ toasts: tmpToasts });
  };

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
    toasts,
    addToast: addToastHandler,
    removeToast: removeToastHandler,
  };
});

export default useDialogStore;
