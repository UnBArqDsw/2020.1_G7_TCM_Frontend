import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MoreVert } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
    margin: 0,
    height: 57,
  },
  appBar: {
    backgroundColor: '#0BC619',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  icon: {
    color: '#ffffff',
    size: 50,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TCM
          </Typography>
          <IconButton>
            <MoreVert className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
