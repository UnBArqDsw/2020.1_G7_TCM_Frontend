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
    marginTop: '10%',
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '70%',
    backgroundColor: 'red',
  },
  scoreBoard: {
    backgroundColor: 'blue',
    marginTop: '20%',
    height: '70%',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  playerScore: {},
  playerScoreBox: {
    backgroundColor: '#cccccc',
    height: '100px',
    width: '100px',
  },
  playerScoreBoxText: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20%',
    fontSize: '50px',
    fontWeight: 'bold',
  },
}));
