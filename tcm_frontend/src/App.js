import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Routes from './routes';
import GlobalStyle from './globalStyle';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(11, 198, 25, 0.8)',
    },
    secondary: {
      main: '#f0f0f5',
    },
    background: {
      default: '#f0f0f5',
    },
    text: {
      primary: '#212121',
      secondary: '#fff',
    },
  },
  shape: {
    borderRadius: '5px',
  },
});

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </MuiThemeProvider>
    </>
  );
};

export default App;
