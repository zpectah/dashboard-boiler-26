import {
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  Link,
} from '@mui/material';
import type { MenuBaseProps } from './types';

const MenuBase = ({
  links = [],
  menuListProps,
  menuItemProps,
}: MenuBaseProps) => {
  return (
    <MenuList {...menuListProps}>
      {links.map(({ url, label, icon }, index) => (
        <MenuItem
          key={index}
          component={Link}
          href={url}
          target="_blank"
          sx={({ spacing }) => ({ padding: spacing(1.25) })}
          {...menuItemProps}
        >
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText>{label}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default MenuBase;
