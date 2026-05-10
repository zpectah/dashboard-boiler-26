import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconPhotoQuestion } from '@tabler/icons-react';
import { useAppStore } from '../../store';
import { IconButtonPlus } from '../button';

const ImageRefreshTrigger = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const { t } = useTranslation();
  const { generateHash } = useAppStore();

  const changeHandler = () => {
    generateHash();

    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 5000);
  };

  return (
    <IconButtonPlus
      tooltip={t('button.imageRefresh')}
      disabled={isDisabled}
      onClick={changeHandler}
    >
      <IconPhotoQuestion />
    </IconButtonPlus>
  );
};

export default ImageRefreshTrigger;
