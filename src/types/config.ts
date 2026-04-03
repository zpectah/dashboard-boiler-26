export interface Config {
  meta: {
    /** Project name */
    name: string;
    /** Project description */
    description: string;
    /** Project version */
    version: string;
  };
  locales: {
    /** System default locale */
    default: string;
    /** Available locales for switching */
    available: string[];
  };
  url: {
    /** Path to random image generator */
    randomImage: string;
  };
  ui: {
    /** Animation timeout */
    animation: number;
    /** Delay for user actions */
    disableLock: number;
  };
  features: object;
}
