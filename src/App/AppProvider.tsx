import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { WithChildren } from '../types';
import theme from '../styles/theme.ts';

type AppProviderProps = WithChildren;

const AppProvider = ({ children }: AppProviderProps) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </LocalizationProvider>
);

export default AppProvider;
