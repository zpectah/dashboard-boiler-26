import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { WithChildren } from '../types';
import theme from '../styles/theme.ts';

type AppProviderProps = WithChildren;

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default AppProvider;
