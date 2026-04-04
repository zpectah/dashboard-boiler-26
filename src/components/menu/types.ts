import type { MenuItemProps, MenuListProps } from '@mui/material';
import type { Links } from '../../types';

export interface MenuBaseProps {
  links: Links;
  menuListProps?: Partial<MenuListProps>;
  menuItemProps?: Partial<MenuItemProps>;
}
