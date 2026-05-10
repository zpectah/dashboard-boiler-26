import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { AppPersistentStoreData } from '@/types';
import { appPersistentStorageKey } from '@/constants';

interface IAppPersistentStore extends AppPersistentStoreData {
  toggleGoogleLinks: () => void;
  toggleAppleLinks: () => void;
  toggleMicrosoftLinks: () => void;
  onPatch: (store: AppPersistentStoreData) => void;
  onReset: () => void;
  setTimestamp: () => void;
  setIntroduction: () => void;
}

const useAppPersistentStore = create<IAppPersistentStore>()(
  persist(
    (set) => {
      const linksGoogle = true;
      const linksApple = true;
      const linksMicrosoft = true;
      const timestamp = '';
      const introduction = false;

      const toggleGoogleLinksHandler = () =>
        set((state) => ({
          linksGoogle: !state.linksGoogle,
        }));

      const toggleAppleLinksHandler = () =>
        set((state) => ({
          linksApple: !state.linksApple,
        }));

      const toggleMicrosoftLinksHandler = () =>
        set((state) => ({
          linksMicrosoft: !state.linksMicrosoft,
        }));

      const patchLinksHandler = ({
        linksGoogle,
        linksApple,
        linksMicrosoft,
      }: AppPersistentStoreData) => {
        set(() => ({
          linksGoogle,
          linksApple,
          linksMicrosoft,
        }));
      };

      const resetStateHandler = () => {
        set(() => ({
          linksGoogle: true,
          linksApple: true,
          linksMicrosoft: true,
          timestamp: new Date().toISOString(),
          introduction: false,
        }));
      };

      const setTimestampHandler = () => {
        set(() => ({ timestamp: new Date().toISOString() }));
      };

      const setIntroductionHandler = () => {
        set(() => ({ introduction: true }));
      };

      return {
        linksGoogle,
        linksApple,
        linksMicrosoft,
        toggleGoogleLinks: toggleGoogleLinksHandler,
        toggleAppleLinks: toggleAppleLinksHandler,
        toggleMicrosoftLinks: toggleMicrosoftLinksHandler,
        onPatch: patchLinksHandler,
        onReset: resetStateHandler,
        timestamp,
        introduction,
        setTimestamp: setTimestampHandler,
        setIntroduction: setIntroductionHandler,
      };
    },
    {
      name: appPersistentStorageKey,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAppPersistentStore;
