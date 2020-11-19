import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  // card: {
  //   marginTop: '3vh',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   margin: '3vh',
  //   height: '20vh',
  //   background: '#e0e0e0',
  // },
  stylegrid: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#000000',
  },

  avatar: {
    width: '7vh',
    height: '7vh',
    marginTop: '3vh',
    margin: '0 auto',
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
    marginTop: '10%',
    // width: '40%',
    // margin: 'auto',
    marginLeft: '15%',
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
  gridstyle: {
    alignItems: 'center',
  },
}));
