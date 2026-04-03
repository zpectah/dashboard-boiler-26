import { IconSettings } from '@tabler/icons-react';
import { useDialogStore } from '../../store';
import { IconButtonPlus } from '../button';

const SettingsFormToggle = () => {
  const { settingsForm, setSettingsForm } = useDialogStore();

  return (
    <IconButtonPlus
      tooltip="Settings"
      onClick={() => setSettingsForm(!settingsForm)}
    >
      <IconSettings />
    </IconButtonPlus>
  );
};

export default SettingsFormToggle;
