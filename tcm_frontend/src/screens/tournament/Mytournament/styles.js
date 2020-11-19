import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  styleDiv: {
    height: '100%',
    margin: '0',
    padding: '0',
    alignItems: 'center',
    justify: 'flex-start',
  },
  tabs: {
    width: '50%',
    marginLeft: '25%',
  },
  footer: theme.mixins.toolbar,
}));
