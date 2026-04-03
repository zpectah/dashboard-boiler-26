import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconPhotoQuestion } from '@tabler/icons-react';
import { getConfig } from '../../config';
import { useAppStore } from '../../store';
import type { ImageRefreshProps } from './types';
import { IconButtonPlus } from '../button';

const ImageRefresh = ({ disabled, ...rest }: ImageRefreshProps) => {
  const { ui } = getConfig();

  const [isDisabled, setIsDisabled] = useState(false);

  const { t } = useTranslation();
  const { onChangeHash } = useAppStore();

  const changeHandler = () => {
    onChangeHash();

    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, ui.disableLock);
  };

  return (
    <IconButtonPlus
      onClick={changeHandler}
      tooltip={t('button.imageRefresh')}
      disabled={isDisabled || disabled}
      {...rest}
    >
      <IconPhotoQuestion />
    </IconButtonPlus>
  );
};

export default ImageRefresh;
