import { useTranslation } from 'react-i18next';
import { IconSun, IconMoon, IconBrightness } from '@tabler/icons-react';
import { themeModeKeys } from '../../enums';
import { useThemeMode } from '../../hooks';
import { IconButtonPlus } from '../button';

const ThemeModeToggle = () => {
  const { t } = useTranslation();
  const { mode, onToggle } = useThemeMode();

  return (
    <IconButtonPlus tooltip={t('button.modeToggle')} onClick={onToggle}>
      {mode ? (
        {
          [themeModeKeys.light]: <IconSun />,
          [themeModeKeys.dark]: <IconMoon />,
          [themeModeKeys.system]: <IconBrightness />,
        }[mode]
      ) : (
        <IconBrightness />
      )}
    </IconButtonPlus>
  );
};

export default ThemeModeToggle;
