import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  score1: {
    marginRight: '10px',
    width: '50%',
  },
  score2: {
    marginLeft: '10px',
    width: '50%',
  },
}));

export const button = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(11, 198, 25, 0.8)',
    },
  },
  shape: {
    borderRadius: '5px',
  },
});
