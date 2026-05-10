import { create } from 'zustand';
import { getRandomId } from '@/utils';

interface IAppStore {
  hash: string;
  timestamp: string;
  generateHash: () => void;
  generateTimestamp: () => void;
  editMode: boolean;
  toggleEditMode: () => void;
}

const useAppStore = create<IAppStore>((set) => {
  const hash = '';
  const timestamp = new Date().toISOString();
  const editMode = false;

  const generateHashHandler = () => set(() => ({ hash: getRandomId(12) }));

  const generateTimestampHandler = () =>
    set(() => ({ timestamp: new Date().toISOString() }));

  const toggleEditModeHandler = () =>
    set((state) => ({ editMode: !state.editMode }));

  return {
    hash,
    timestamp,
    generateHash: generateHashHandler,
    generateTimestamp: generateTimestampHandler,
    editMode,
    toggleEditMode: toggleEditModeHandler,
  };
});

export default useAppStore;
