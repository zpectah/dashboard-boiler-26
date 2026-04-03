import { useDialogStore } from '../../store';
import { Drawer } from '../../components';

const SettingsForm = () => {
  const { settingsForm, setSettingsForm } = useDialogStore();

  return (
    <Drawer
      anchor="right"
      title="Settings"
      open={settingsForm}
      onClose={() => setSettingsForm(false)}
      width={{
        xs: '100%',
        md: '480px',
      }}
    >
      ...settings Drawer form
    </Drawer>
  );
};

export default SettingsForm;
