import { create } from 'zustand';

interface IDialogStore {
  panelDialog: string | null;
  onOpenPanelDialog: (id: string | 'new') => void;
  onClosePanelDialog: () => void;
}

const useDialogStore = create<IDialogStore>((set) => {
  const panelDialog: string | null = null;

  const openPanelDialogHandler = (id: string | 'new') =>
    set({ panelDialog: id });

  const closePanelDialogHandler = () => set({ panelDialog: null });

  return {
    panelDialog,
    onOpenPanelDialog: openPanelDialogHandler,
    onClosePanelDialog: closePanelDialogHandler,
  };
});

export default useDialogStore;
