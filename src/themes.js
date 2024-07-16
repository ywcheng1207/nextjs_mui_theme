// src/theme.js
import { createTheme } from '@mui/material/styles';

export const frontTheme = createTheme({
  palette: {
    primary: {
      main: '#666666',
    },
    secondary: {
      main: '#888888',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Comic Sans MS, Arial, sans-serif',
      fontSize: '2rem',
    },
    button: {
      fontFamily: 'Comic Sans MS, Arial, sans-serif',
      fontSize: '1rem',
      textTransform: 'none',
    },
  }
});

export const adminTheme = createTheme({
  palette: {
    primary: {
      main: '#666666',
    },
    secondary: {
      main: '#000080',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Comic Sans MS, Arial, sans-serif',
      fontSize: '2rem',
    },
    button: {
      fontFamily: 'Comic Sans MS, Arial, sans-serif',
      fontSize: '1rem',
      textTransform: 'none',
    },
  }
});