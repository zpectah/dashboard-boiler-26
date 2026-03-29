import { IconRefresh } from '@tabler/icons-react';
import { useAppStore } from '../../store';
import type { ImageRefreshProps } from './types';
import { IconButtonPlus } from '../button';

const ImageRefresh = ({ ...rest }: ImageRefreshProps) => {
  const { onChangeHash } = useAppStore();

  return (
    <IconButtonPlus
      onClick={() => onChangeHash()}
      tooltip="Image refresh"
      {...rest}
    >
      <IconRefresh />
    </IconButtonPlus>
  );
};

export default ImageRefresh;
