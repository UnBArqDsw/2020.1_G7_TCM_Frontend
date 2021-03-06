import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  footer: theme.mixins.toolbar,
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
}));
