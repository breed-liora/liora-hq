import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200EE', // Placeholder primary color
    },
    secondary: {
      main: '#03DAC6', // Placeholder secondary color
    },
  },
  typography: {
    // Customize fonts here if needed
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);