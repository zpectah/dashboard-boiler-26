import { useTranslation } from 'react-i18next';
import { IconBrandAppleFilled } from '@tabler/icons-react';
import { useDialogStore } from '../../store';
import { useBrandLinks } from '../../hooks';
import { drawerLinksWidth } from '../../constants';
import { IconButtonPlus } from '../button';
import { Drawer } from '../drawer';
import MenuBase from './MenuBase';

const AppleLinks = () => {
  const { t } = useTranslation('features');
  const { appleLinks, setAppleLinks } = useDialogStore();
  const { apple: links } = useBrandLinks();

  return (
    <>
      <IconButtonPlus
        tooltip={t('apple.title')}
        onClick={() => setAppleLinks(true)}
      >
        <IconBrandAppleFilled />
      </IconButtonPlus>
      <Drawer
        anchor="left"
        open={appleLinks}
        onClose={() => setAppleLinks(false)}
        title={t('apple.title')}
        titleIcon={<IconBrandAppleFilled />}
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

export default AppleLinks;
