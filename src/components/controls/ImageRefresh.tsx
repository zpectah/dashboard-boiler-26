import { useTranslation } from 'react-i18next';
import { IconPhotoQuestion } from '@tabler/icons-react';
import { useAppStore } from '../../store';
import type { ImageRefreshProps } from './types';
import { IconButtonPlus } from '../button';

const ImageRefresh = ({ ...rest }: ImageRefreshProps) => {
  const { t } = useTranslation();
  const { onChangeHash } = useAppStore();

  return (
    <IconButtonPlus
      onClick={() => onChangeHash()}
      tooltip={t('button.imageRefresh')}
      {...rest}
    >
      <IconPhotoQuestion />
    </IconButtonPlus>
  );
};

export default ImageRefresh;
