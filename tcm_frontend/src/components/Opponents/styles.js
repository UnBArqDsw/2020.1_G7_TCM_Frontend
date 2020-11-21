import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  stylegrid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '7vh',
    height: '7vh',
  },
  stylefont: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
  },
}));
