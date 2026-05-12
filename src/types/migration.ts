import type { UserLinks } from './links';

export interface V25MigrationData {
  layout: object;
  timeDate: object;
  calendar: object;
  holidays: object;
  favorites: {
    active: boolean;
    items: UserLinks;
  };
  todos: object;
}
