import type { ReactNode } from 'react';

interface BaseLink {
  url: string;
  label: string;
  order: number;
}

export interface LinkItem extends BaseLink {
  icon?: ReactNode;
}

export type Links = LinkItem[];

export interface UserLink extends BaseLink {
  id: string;
}

export type UserLinks = UserLink[];
