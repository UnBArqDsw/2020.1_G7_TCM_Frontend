import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
    margin: '0',
    padding: '0',
    justify: 'flex-start',
    alignItems: 'center',
  },
  footer: {
    overflow: 'hidden',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginTop: '1.2rem',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    left: '50%',
    backgroundColor: 'red',
  },
  styleBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '74%',
    // backgroundColor: 'red'
  },
}));
