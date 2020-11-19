import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './screens/user/account/Login';
import SignUp from './screens/user/account/SignUp';
import CreateTournament1 from './screens/tournament/CreateTournament1';
import Feed from './screens/Feed';
import Profile from './screens/Profile';
import ButtonBox from './components/ButtonClearOrCheck';
import Stats from './screens/tournament/Stats';
import MyTournament from './screens/tournament/Mytournament';
import SolicitationTournament from './screens/SolicitationTournament';
import ViewTournamentInfo from './screens/tournament/ViewTournamentInfo';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/create_tournament" component={CreateTournament1} />
      <Route path="/feed" component={Feed} />
      <Route path="/teste" component={ButtonBox} />
      <Route path="/stats" component={Stats} />
      <Route path="/mytournament" component={MyTournament} />
      <Route path="/solicitation/:id" component={SolicitationTournament} />
      <Route path="/tournament/:id" component={ViewTournamentInfo} />
    </Switch>
  );
};

export default Routes;
