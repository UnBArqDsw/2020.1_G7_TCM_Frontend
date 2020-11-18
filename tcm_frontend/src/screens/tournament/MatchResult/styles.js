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
    marginTop: '15%',
    top: '0',
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    height: '70%',
    // backgroundColor: 'red',
    padding: '0px 10% 0px 10% ',
  },
  scoreBoard: {
    // backgroundColor: 'blue',
    marginTop: '20%',
    height: '50%',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  playerScore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playerScoreText: {
    fontSize: '20px',
    fontWeight: 'bold',
    paddingTop: '10px',
  },
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
  playerScoreSeparator: {
    display: 'flex',
    paddingTop: '8%',
    justifyContent: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
  },
}));