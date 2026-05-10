import { useTranslation } from 'react-i18next';
import { IconToggleLeft, IconToggleRightFilled } from '@tabler/icons-react';
import { useAppStore } from '../../store';
import { IconButtonPlus } from '../button';

const EditModeTrigger = () => {
  const { t } = useTranslation();
  const { editMode, toggleEditMode } = useAppStore();

  return (
    <IconButtonPlus tooltip={t('button.editMode')} onClick={toggleEditMode}>
      {editMode ? <IconToggleRightFilled /> : <IconToggleLeft />}
    </IconButtonPlus>
  );
};

export default EditModeTrigger;
