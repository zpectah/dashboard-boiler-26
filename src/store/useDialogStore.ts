import { create } from 'zustand';
import type {
  ConfirmDialog,
  Toasts,
  ToastItem,
  IntroductionContextType,
} from '@/types';
import { toastsItemSeverityKeys } from '@/enums';
import { getRandomId } from '@/utils';
import { toastsCloseTimeoutDefault } from '@/constants';

interface IDialogStore {
  /* Confirm dialog */
  confirmDialog: ConfirmDialog | null;
  openConfirmDialog: (dialog: ConfirmDialog | null) => void;
  closeConfirmDialog: () => void;
  /* Toasts */
  toasts: Toasts;
  addToast: (toast: ToastItem) => void;
  removeToast: (id: string) => void;
  /* Panel detail */
  panelDetailId: string | null;
  openPanelDetail: (id: string | null) => void;
  closePanelDetail: () => void;
  /* Link detail */
  linkDetailId: string | null;
  openLinkDetail: (id: string | null) => void;
  closeLinkDetail: () => void;
  /* Settings dialog */
  settingsFormOpen: boolean;
  toggleSettingsForm: () => void;
  /* Links dialogs */
  googleLinksOpen: boolean;
  toggleGoogleLinks: () => void;
  appleLinksOpen: boolean;
  toggleAppleLinks: () => void;
  msLinksOpen: boolean;
  toggleMsLinks: () => void;
  /* Introduction dialog */
  introductionDialog: IntroductionContextType | null;
  openIntroductionDialog: (context: IntroductionContextType) => void;
  closeIntroductionDialog: () => void;
}

const useDialogStore = create<IDialogStore>((set, get) => {
  const confirmDialog: ConfirmDialog | null = null;
  const toasts: Toasts = [];
  const panelDetailId: string | null = null;
  const linkDetailId: string | null = null;
  const settingsFormOpen: boolean = false;
  const googleLinksOpen: boolean = false;
  const appleLinksOpen: boolean = false;
  const msLinksOpen: boolean = false;
  const introductionDialog: IntroductionContextType | null = null;

  const openConfirmDialogHandler = (dialog: ConfirmDialog | null) =>
    set({ confirmDialog: dialog });

  const closeConfirmDialogHandler = () => set({ confirmDialog: null });

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
  }: ToastItem) => {
    const tmpToasts = [...get().toasts];
    const id = getRandomId();

    tmpToasts.push({
      id,
      title,
      description,
      severity: severity ?? toastsItemSeverityKeys.info,
    });

    if (autoclose) {
      const timeout =
        typeof autoclose === 'number' ? autoclose : toastsCloseTimeoutDefault;

      setTimeout(() => removeToastHandler(id), timeout);
    }

    set({ toasts: tmpToasts });
  };

  const openPanelDetailHandler = (id: string | null) =>
    set(() => ({ panelDetailId: id }));

  const closePanelDetailHandler = () => set(() => ({ panelDetailId: null }));

  const openLinkDetailHandler = (id: string | null) =>
    set(() => ({ linkDetailId: id }));

  const closeLinkDetailHandler = () => set(() => ({ linkDetailId: null }));

  const toggleSettingsFormHandler = () =>
    set((state) => ({ settingsFormOpen: !state.settingsFormOpen }));

  const toggleGoogleLinksHandler = () =>
    set((state) => ({ googleLinksOpen: !state.googleLinksOpen }));

  const toggleAppleLinksHandler = () =>
    set((state) => ({ appleLinksOpen: !state.appleLinksOpen }));

  const toggleMsLinksHandler = () =>
    set((state) => ({ msLinksOpen: !state.msLinksOpen }));

  const openIntroductionDialogHandler = (context: IntroductionContextType) =>
    set(() => ({ introductionDialog: context }));

  const closeIntroductionDialogHandler = () =>
    set(() => ({ introductionDialog: null }));

  return {
    /* Confirm dialog */
    confirmDialog,
    openConfirmDialog: openConfirmDialogHandler,
    closeConfirmDialog: closeConfirmDialogHandler,
    /* Toasts */
    toasts,
    addToast: addToastHandler,
    removeToast: removeToastHandler,
    /* Panel detail */
    panelDetailId,
    openPanelDetail: openPanelDetailHandler,
    closePanelDetail: closePanelDetailHandler,
    /* Link detail */
    linkDetailId,
    openLinkDetail: openLinkDetailHandler,
    closeLinkDetail: closeLinkDetailHandler,
    /* Settings dialog */
    settingsFormOpen,
    toggleSettingsForm: toggleSettingsFormHandler,
    /* Links dialogs */
    googleLinksOpen,
    toggleGoogleLinks: toggleGoogleLinksHandler,
    appleLinksOpen,
    toggleAppleLinks: toggleAppleLinksHandler,
    msLinksOpen,
    toggleMsLinks: toggleMsLinksHandler,
    /* Introduction dialog */
    introductionDialog,
    openIntroductionDialog: openIntroductionDialogHandler,
    closeIntroductionDialog: closeIntroductionDialogHandler,
  };
});

export default useDialogStore;
