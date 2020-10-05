import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: '3vh',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3vh',
    height: '20vh',
    background: '#e0e0e0',
  },
  avatar: {
    width: '13vh',
    height: '13vh',
    marginTop: '1vh',
    marginBottom: '5px',
    borderRadius: '10vh',
    marginRight: '0',
  },
  stylecontainer: {
    marginLeft: '1vh',
    marginTop: '1vh',
    display: 'flex',
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
}));
