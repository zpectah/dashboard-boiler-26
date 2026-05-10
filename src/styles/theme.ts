import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {},
  typography: {
    fontFamily: '"Barlow", sans-serif',
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    h1: {
      fontWeight: 500,
    },
    button: {
      fontSize: '.925rem',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {},
        primary: {
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        // variant: 'outlined',
        elevation: 0,
      },
    },
  },
});

export default theme;
