interface ConfigLinkItem {
  url: string;
  label: string;
}

export interface Config {
  meta: {
    /** Project name */
    name: string;
    /** Project description */
    description: string;
    /** Project version */
    version: string;
    /** Project start year */
    since: number;
  };
  locales: {
    /** System default locale */
    default: string;
    /** Available locales for switching */
    available: string[];
  };
  /** Url paths */
  url: Record<string, string>;
  /** Author necessary links */
  links: ConfigLinkItem[];
  /** UI options */
  ui: {
    /** Animation timeout */
    animation: number;
    /** Delay for user actions */
    disableLock: number;
    /** Forecast API cache duration */
    apiCacheDuration: number;
  };
  features: object;
}
