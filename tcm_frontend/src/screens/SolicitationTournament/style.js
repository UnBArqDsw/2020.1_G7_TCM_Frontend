import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: {
    overflow: 'hidden',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  container: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
    margin: '0',
    padding: '0',
    justify: 'flex-start',
    alignItems: 'center',
    background: '#ffffff',
  },
  stylesdiv: {
    backgroundColor: '#ffffff',
    height: '100vh',
  },

  stylecontainer: {
    alignItems: 'center',
    display: 'flex',
    margin: '2% 0px',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  stylefont: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
  },
  stylecardcontent: {
    display: 'flex',
  },
}));
