import { useTranslation } from 'react-i18next';
import { IconBrandWindowsFilled } from '@tabler/icons-react';
import { useDialogStore } from '../../store';
import { useBrandLinks } from '../../hooks';
import { drawerLinksWidth } from '../../constants';
import { IconButtonPlus } from '../button';
import { Drawer } from '../drawer';
import MenuBase from './MenuBase';

const MicrosoftLinks = () => {
  const { t } = useTranslation('features');
  const { microsoftLinks, setMicrosoftLinks } = useDialogStore();
  const { microsoft: links } = useBrandLinks();

  return (
    <>
      <IconButtonPlus
        tooltip={t('microsoft.title')}
        onClick={() => setMicrosoftLinks(true)}
      >
        <IconBrandWindowsFilled />
      </IconButtonPlus>
      <Drawer
        anchor="left"
        open={microsoftLinks}
        onClose={() => setMicrosoftLinks(false)}
        title={t('microsoft.title')}
        titleIcon={<IconBrandWindowsFilled />}
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

export default MicrosoftLinks;
