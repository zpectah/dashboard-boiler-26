import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { appPersistentStorageKey } from '@/constants';

interface IAppLinks {
  linksGoogle: boolean;
  linksApple: boolean;
  linksMicrosoft: boolean;
}
interface IAppPersistentStore extends IAppLinks {
  toggleGoogleLinks: () => void;
  toggleAppleLinks: () => void;
  toggleMicrosoftLinks: () => void;
  onPatch: ({ linksGoogle, linksApple, linksMicrosoft }: IAppLinks) => void;
}

const useAppPersistentStore = create<IAppPersistentStore>()(
  persist(
    (set) => {
      const linksGoogle = true;
      const linksApple = true;
      const linksMicrosoft = true;

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
      }: IAppLinks) => {
        set(() => ({
          linksGoogle,
          linksApple,
          linksMicrosoft,
        }));
      };

      return {
        linksGoogle,
        linksApple,
        linksMicrosoft,
        toggleGoogleLinks: toggleGoogleLinksHandler,
        toggleAppleLinks: toggleAppleLinksHandler,
        toggleMicrosoftLinks: toggleMicrosoftLinksHandler,
        onPatch: patchLinksHandler,
      };
    },
    {
      name: appPersistentStorageKey,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAppPersistentStore;
