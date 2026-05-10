import { useTranslation } from 'react-i18next';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import { useDialogStore, useAppPersistentStore } from '@/store';
import { IconButtonPlus } from '../button';

const GoogleLinksTrigger = () => {
  const { t } = useTranslation();
  const { toggleGoogleLinks } = useDialogStore();
  const { linksGoogle } = useAppPersistentStore();

  if (!linksGoogle) return;

  return (
    <IconButtonPlus
      tooltip={t('button.googleLinks')}
      onClick={toggleGoogleLinks}
    >
      <IconBrandGoogleFilled />
    </IconButtonPlus>
  );
};

export default GoogleLinksTrigger;
