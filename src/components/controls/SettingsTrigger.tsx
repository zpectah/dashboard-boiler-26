import { useTranslation } from 'react-i18next';
import { IconSettings } from '@tabler/icons-react';
import { useDialogStore } from '../../store';
import { IconButtonPlus } from '../button';

const SettingsTrigger = () => {
  const { t } = useTranslation();
  const { toggleSettingsForm } = useDialogStore();

  return (
    <IconButtonPlus tooltip={t('label.settings')} onClick={toggleSettingsForm}>
      <IconSettings />
    </IconButtonPlus>
  );
};

export default SettingsTrigger;
