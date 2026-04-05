import type { ReactNode } from 'react';

interface BaseLink {
  url: string;
  label: string;
}

export interface LinkItem extends BaseLink {
  order: number;
  icon?: ReactNode;
}

export type Links = LinkItem[];

export type UserLink = BaseLink;

export type UserLinks = UserLink[];
