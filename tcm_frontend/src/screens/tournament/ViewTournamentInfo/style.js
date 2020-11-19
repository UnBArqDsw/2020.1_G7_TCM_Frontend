/* eslint-disable no-shadow */
import { createMuiTheme, makeStyles } from '@material-ui/core';

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
}));
