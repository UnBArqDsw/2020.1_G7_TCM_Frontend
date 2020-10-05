import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  InputLabel,
} from '@material-ui/core';
import { Home, Search, AddCircle, EmojiEvents } from '@material-ui/icons';

import { makestyles } from './style';

function Navbar() {
  const styles = makestyles();

  return (
    <BottomNavigation className={styles.bottomNavigation} showLabels>
      <BottomNavigationAction
        className="bottom-navigation-icon"
        name="feed"
        label={<InputLabel className={styles.label}>Feed</InputLabel>}
        icon={<Home className={styles.icon} />}
      />
      <BottomNavigationAction
        className="bottom-navigation-icon"
        name="search"
        label={<InputLabel className={styles.label}>Pesquisa</InputLabel>}
        icon={<Search className={styles.icon} />}
      />
      <BottomNavigationAction
        className="bottom-navigation-icon"
        name="create-tournament"
        label={<InputLabel className={styles.label}>Criar Torneio</InputLabel>}
        icon={<AddCircle className={styles.icon} />}
      />
      <BottomNavigationAction
        className="bottom-navigation-icon"
        name="my-tournaments"
        label={<InputLabel className={styles.label}>Meus Torneios</InputLabel>}
        icon={<EmojiEvents className={styles.icon} />}
      />
    </BottomNavigation>
  );
}

export default Navbar;
