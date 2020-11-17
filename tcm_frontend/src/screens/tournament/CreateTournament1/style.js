/* eslint-disable no-shadow */
import { createMuiTheme, makeStyles } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#000',
    },
    background: {
      default: '#000',
    },
    text: {
      primary: '#212121',
      secondary: '#000',
    },
  },
  shape: {
    borderRadius: '5px',
  },
});

export const button = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(11, 198, 25, 0.8)',
    },
  },
  shape: {
    borderRadius: '5px',
  },
});

export const useStyles = makeStyles((theme) => ({
  footer: theme.mixins.toolbar,

  name: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  type: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  address: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  initDate: {
    marginRight: '2%',
    width: '48%',
  },
  finishDate: {
    marginLeft: '2%',
    width: '48%',
  },
}));
