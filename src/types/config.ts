export interface Config {
  meta: {
    name: string;
    description: string;
    version: string;
  };
  locales: {
    default: string;
    available: string[];
  };
}
