import { MenuList } from '@mui/material';
import type { Links } from '@/types';
import DrawerLinksItem from '@/components/links/DrawerLinksItem.tsx';

interface DrawerLinksProps {
  items: Links;
  disableFavicon?: boolean;
}

const DrawerLinks = ({ items = [], disableFavicon }: DrawerLinksProps) => (
  <MenuList>
    {items
      .sort((a, b) => a.order - b.order)
      .map((item) => (
        <DrawerLinksItem
          key={item.id}
          disableFavicon={disableFavicon}
          {...item}
        />
      ))}
  </MenuList>
);

export default DrawerLinks;
