import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  createMuiTheme,
  MuiThemeProvider,
  Hidden,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import Routes from './routes';
import GlobalStyle from './globalStyle';

import Logo from './assets/logo2.svg';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(11, 198, 25, 0.8)',
    },
    secondary: {
      main: '#f0f0f5',
    },
    background: {
      default: '#000',
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
      <Hidden mdDown>
        <Dialog
          open
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>
            Esta aplicação está disponivel apenas para dispositivos móveis
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ color: '#000' }}>
              Entre com esse link em seu celular e aproveite os beneficios do
              aplicativo
            </DialogContentText>
            <div>
              <img
                src={Logo}
                style={{
                  marginLeft: '12rem',
                  width: '10rem',
                  height: '4rem',
                }}
                alt="Grupoflix"
              />
            </div>
          </DialogContent>
        </Dialog>
      </Hidden>
      <Hidden only={['lg', 'xl']}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes />
            <GlobalStyle />
          </BrowserRouter>
        </MuiThemeProvider>
      </Hidden>
    </>
  );
};

export default App;
