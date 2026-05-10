import { useTranslation } from 'react-i18next';
import { IconBrandAppleFilled } from '@tabler/icons-react';
import { useDialogStore, useAppPersistentStore } from '@/store';
import { IconButtonPlus } from '../button';

const AppleLinksTrigger = () => {
  const { t } = useTranslation();
  const { toggleAppleLinks } = useDialogStore();
  const { linksApple } = useAppPersistentStore();

  if (!linksApple) return;

  return (
    <IconButtonPlus tooltip={t('button.appleLinks')} onClick={toggleAppleLinks}>
      <IconBrandAppleFilled />
    </IconButtonPlus>
  );
};

export default AppleLinksTrigger;
