import { introductionContextTypeKeys } from '@/enums';

export interface AppPersistentStoreData {
  linksGoogle: boolean;
  linksApple: boolean;
  linksMicrosoft: boolean;
  /** Persistent loaded data for reset options */
  timestamp: string;
  introduction: boolean;
}

export type IntroductionContextType = keyof typeof introductionContextTypeKeys;
