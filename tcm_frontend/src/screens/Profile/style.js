import { makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  styleDiv: {
    flexGrow: 1,
    height: '100%',
    margin: '0',
    padding: '0',
    alignItems: 'center',
    justify: 'flex-start',
  },
  footer: {
    overflow: 'hidden',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      width: '20vh',
      height: '20vh',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  styleLink: {
    marginTop: '1%',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.0rem',
    },
  },
  styleFormProfile: {
    height: '100%',
  },
  styleLevel: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '10px 0px 20px 0px',
  },

  styleLevelSelect: {
    width: '100%',
  },
  styleInputDate: {
    marginTop: '3%',
  },
}));

export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
  },
});
