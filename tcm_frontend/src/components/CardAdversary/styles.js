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
  avatar1: {
    width: '9vh',
    height: '9vh',
    marginTop: '1vh',
    marginLeft: '1vh',
    marginBottom: '5px',
    borderRadius: '10vh',
    marginRight: '0',
  },
  avatar2: {
    width: '9vh',
    height: '9vh',
    marginTop: '1vh',
    marginLeft: '20vh',
    marginBottom: '5px',
    borderRadius: '10vh',
    marginRight: '0',
  },
  stylecontainer: {
    marginLeft: '1vh',
    marginTop: '1vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    columnCount: '2',
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
