import type { ReactNode, HTMLAttributes, DetailedHTMLProps } from 'react';

export interface WithChildren {
  children: ReactNode;
}

export type ButtonElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
