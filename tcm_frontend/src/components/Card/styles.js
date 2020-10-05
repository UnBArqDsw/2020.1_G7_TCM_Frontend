import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  card: {
    marginTop: '2vh',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '3vh',
    height: '170px',
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
    marginLeft: '13vh',
    marginTop: '-13vh',
  },
  stylediv: {
    background: '#000000',
  },
}));
