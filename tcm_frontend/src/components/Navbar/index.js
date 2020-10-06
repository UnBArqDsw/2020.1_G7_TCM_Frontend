import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  InputLabel,
} from '@material-ui/core';
import { Home, Search, AddCircle, EmojiEvents } from '@material-ui/icons';

import { makestyles } from './style';

function Navbar() {
  const classes = makestyles();

  return (
    <BottomNavigation className={classes.root} showLabels>
      <BottomNavigationAction
        name="feed"
        className={classes.bottomNavigationAction}
        label="Feed"
        icon={<Home className={classes.icon} />}
      />
      <BottomNavigationAction
        name="search"
        className={classes.bottomNavigationAction}
        label="Pesquisa"
        icon={<Search className={classes.icon} />}
      />
      <BottomNavigationAction
        name="create-tournament"
        className={classes.bottomNavigationAction}
        label="Criar Torneio"
        icon={<AddCircle className={classes.icon} />}
      />
      <BottomNavigationAction
        className={classes.bottomNavigationAction}
        name="my-tournaments"
        label="Torneios"
        icon={<EmojiEvents className={classes.icon} />}
      />
    </BottomNavigation>
  );
}

export default Navbar;
