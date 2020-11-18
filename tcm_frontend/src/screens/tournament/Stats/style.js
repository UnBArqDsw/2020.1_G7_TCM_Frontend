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
    background: '#ffffff',
  },
  centerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '18px',
    marginTop: '20px',
  },
  scoreBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    marginTop: '30px',
    marginBottom: '80px',
  },
  scoreBoxPlayers: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreBoxPlayersSeparator: {
    height: '40px',
    width: '40px',
    marginBottom: '65px',
  },
  scoreBoxPlayer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scoreBoxPlayerIcon: {
    backgroundColor: '#EAEAEA',
    height: '100px',
    width: '100px',
    borderRadius: '50px',
    marginBottom: '15px',
  },
  scoreBoxPlayerName: {
    fontSize: '18px',
    marginTop: '10px',
  },
  scoreBoxSetSeparator: {
    position: 'absolute',
    left: '46%',
    top: '43%',
  },
  observationTable: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    width: '90%',
    borderRadius: '5px',
  },
  observationTableTitle: {
    fontSize: '18px',
    marginTop: '10px',
  },
  observationBox: {
    border: '1px solid #A9A4A4',
    borderRadius: '10px',
    margin: '15px',
    padding: '10px 30px',
    height: '110px',
  },
  observationBoxText: {
    marginTop: '15px',
    fontSize: '16px',
  },
}));
