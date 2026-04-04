import type { ReactNode } from 'react';

export interface LinkItem {
  url: string;
  label: string;
  order: number;
  icon?: ReactNode;
}

export type Links = LinkItem[];
