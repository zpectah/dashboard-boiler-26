import { useTranslation } from 'react-i18next';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { useDialogStore } from '../../store';
import { useBrandLinks } from '../../hooks';
import { drawerLinksWidth } from '../../constants';
import { IconButtonPlus } from '../button';
import { Drawer } from '../drawer';
import MenuBase from './MenuBase';

const GoogleLinks = () => {
  const { t } = useTranslation('common');
  const { googleLinks, setGoogleLinks } = useDialogStore();
  const { google: links } = useBrandLinks();

  return (
    <>
      <IconButtonPlus
        tooltip={t('common:features.google.title')}
        onClick={() => setGoogleLinks(true)}
      >
        <IconBrandGoogleFilled />
      </IconButtonPlus>
      <Drawer
        anchor="left"
        open={googleLinks}
        onClose={() => setGoogleLinks(false)}
        title={t('common:features.google.title')}
        titleIcon={<IconBrandGoogleFilled />}
        width={{
          xs: '100%',
          sm: drawerLinksWidth,
        }}
      >
        <MenuBase links={links} />
      </Drawer>
    </>
  );
};

export default GoogleLinks;
