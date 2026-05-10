import {
  MenuItem,
  ListItemText,
  ListItemIcon,
  Link,
  styled,
} from '@mui/material';
import type { LinkItem } from '@/types';
import { getFaviconUrl } from '@/utils';

const Favicon = styled('img')({
  width: 20,
  height: 20,
  flexShrink: 0,
});

type DrawerLinksItemProps = LinkItem & {
  disableFavicon?: boolean;
};

const DrawerLinksItem = ({
  url,
  label,
  icon,
  disableFavicon,
}: DrawerLinksItemProps) => {
  const faviconUrl = getFaviconUrl(url);

  return (
    <MenuItem
      component={Link}
      href={url}
      target="_blank"
      sx={({ spacing }) => ({ padding: spacing(1.25) })}
    >
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      {faviconUrl && !disableFavicon && (
        <ListItemIcon>
          <Favicon src={faviconUrl} alt={label} loading="lazy" />
        </ListItemIcon>
      )}
      <ListItemText>{label}</ListItemText>
    </MenuItem>
  );
};

export default DrawerLinksItem;
