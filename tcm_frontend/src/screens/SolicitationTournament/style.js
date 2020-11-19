import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: theme.mixins.toolbar,
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
  styleButton: {
    marginTop: '15vh',
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
    padding: '20px',
  },
  stylefont: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.15rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
  },
  stylecardcontent: {
    display: 'flex',
  },
}));
