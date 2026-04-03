import { useState, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem } from '@mui/material';
import { IconLanguage, IconX } from '@tabler/icons-react';
import { getConfig } from '../../config';
import { useLocales } from '../../hooks';
import { IconButtonPlus } from '../button';

const LocalesMenu = () => {
  const { locales } = getConfig();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { t } = useTranslation(['common']);
  const { locale, onChange } = useLocales();

  const open = Boolean(anchorEl);

  const openHandler = (event: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const closeHandler = () => setAnchorEl(null);

  const selectHandler = (locale: string) => {
    onChange(locale);
    closeHandler();
  };

  // TODO
  // if (locales.available.length === 1) return null;

  return (
    <>
      <IconButtonPlus
        id="locale-menu-button"
        aria-controls={open ? 'locale-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={openHandler}
        tooltip={t('label.localeMenu')}
      >
        {open ? <IconX /> : <IconLanguage />}
      </IconButtonPlus>
      <Menu
        id="locale-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeHandler}
        slotProps={{
          list: {
            'aria-labelledby': 'locale-menu-button',
          },
        }}
      >
        {locales.available.map((item) => (
          <MenuItem
            key={item}
            onClick={() => selectHandler(item)}
            selected={item === locale}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LocalesMenu;
