import { makeStyles } from '@material-ui/core';

export const makestyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#EAF1EB',
    '&:only-child': {
      backgroundColor: '#000',
    },
  },

  bottomNavigationAction: {
    '&:only-child': {
      backgroundColor: '#000',
    },
    color: '#000',
    justifyContent: 'center',
    '& .MuiBottomNavigationAction-label': {
      color: '#000',
    },
  },

  icon: {
    color: '#050505',
    width: '28px',
    height: '32px',
    opacity: '70%',
  },
});
