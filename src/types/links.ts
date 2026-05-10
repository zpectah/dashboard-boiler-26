import type { ReactNode } from 'react';

interface BaseLink {
  id: string;
  url: string;
  label: string;
  order: number;
}

export interface LinkItem extends BaseLink {
  icon?: ReactNode;
}

export type Links = LinkItem[];

export type UserLink = BaseLink;

export type UserLinks = UserLink[];
