import { useTranslation } from 'react-i18next';
import { IconBrandWindowsFilled } from '@tabler/icons-react';
import { useDialogStore, useAppPersistentStore } from '@/store';
import { IconButtonPlus } from '../button';

const MsLinksTrigger = () => {
  const { t } = useTranslation();
  const { toggleMsLinks } = useDialogStore();
  const { linksMicrosoft } = useAppPersistentStore();

  if (!linksMicrosoft) return;

  return (
    <IconButtonPlus tooltip={t('button.msLinks')} onClick={toggleMsLinks}>
      <IconBrandWindowsFilled />
    </IconButtonPlus>
  );
};

export default MsLinksTrigger;
