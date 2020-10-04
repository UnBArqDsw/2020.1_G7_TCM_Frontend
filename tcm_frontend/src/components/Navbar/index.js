import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, Search, AddCircle, EmojiEvents } from '@material-ui/icons';

const makestyles = makeStyles({
  bottomNavigation: {
    backgroundColor: '#EAF1EB',
  },
});

function Navbar() {
  const styles = makestyles();

  return (
    <BottomNavigation className={styles.bottomNavigation} showLabels>
      <BottomNavigationAction
        className="bottom-navigation-icon"
        label="Feed"
        icon={<Home style={{ color: '#050505', opacity: '70%' }} />}
      />
      <BottomNavigationAction
        className="bottom-navigation-icon"
        name="Pesquisa"
        label="Search"
        icon={<Search style={{ color: '#050505', opacity: '70%' }} />}
      />
      <BottomNavigationAction
        className="bottom-navigation-icon"
        label="Criar Torneio"
        icon={<AddCircle style={{ color: '#050505', opacity: '70%' }} />}
      />
      <BottomNavigationAction
        className="bottom-navigation-icon"
        label="Torneios"
        icon={<EmojiEvents style={{ color: '#050505', opacity: '70%' }} />}
      />
    </BottomNavigation>
  );
}

export default Navbar;
