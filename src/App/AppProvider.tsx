import { useTranslation } from 'react-i18next';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { WithChildren } from '@/types';
import { themeModeStorageKey } from '@/constants';
import theme from '../styles/theme';

type AppProviderProps = WithChildren;

const AppProvider = ({ children }: AppProviderProps) => {
  const { i18n } = useTranslation();

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={i18n.language}
    >
      <ThemeProvider theme={theme} modeStorageKey={themeModeStorageKey}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default AppProvider;
