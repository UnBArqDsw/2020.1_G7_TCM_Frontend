import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Home, Search, AddCircle, EmojiEvents } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { makestyles } from './style';

function Navbar() {
  const history = useHistory();
  const classes = makestyles();

  return (
    <BottomNavigation className={classes.root} showLabels>
      <BottomNavigationAction
        name="feed"
        className={classes.bottomNavigationAction}
        label="Feed"
        icon={<Home className={classes.icon} />}
        onClick={() => {
          history.push('/feed');
        }}
      />
      <BottomNavigationAction
        name="search"
        className={classes.bottomNavigationAction}
        label="Pesquisa"
        icon={<Search className={classes.icon} />}
        disabled
      />
      <BottomNavigationAction
        name="create-tournament"
        className={classes.bottomNavigationAction}
        label="Criar Torneio"
        icon={<AddCircle className={classes.icon} />}
        onClick={() => {
          history.push('/create_tournament');
        }}
      />
      <BottomNavigationAction
        className={classes.bottomNavigationAction}
        name="my-tournaments"
        label="Torneios"
        icon={<EmojiEvents className={classes.icon} />}
        onClick={() => {
          history.push('/mytournament');
        }}
      />
    </BottomNavigation>
  );
}

export default Navbar;
