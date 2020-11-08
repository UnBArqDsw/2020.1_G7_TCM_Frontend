import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
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
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    // backgroundColor: 'blue',
    marginTop: '10%',
  },
  centerBox: {
    // flexGrow: 1,
    // justify: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '70%',
    backgroundColor: 'red',
  },
  scoreBoard: {
    backgroundColor: 'blue',
    marginTop: '20%',
    height: '70%',
  },
  //   playerScore{

  //   },
}));
