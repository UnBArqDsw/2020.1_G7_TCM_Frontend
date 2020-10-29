import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './screens/user/account/Login';
import SignUp from './screens/user/account/SignUp';
import RegisterII from './screens/tournament/RegisterII';
import CreateTournament1 from './screens/tournament/CreateTournament1';
import Feed from './screens/Feed';
import Profile from './screens/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/tournament2" component={RegisterII} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/create_tournament" component={CreateTournament1} />
      <Route path="/feed" component={Feed} />
    </Switch>
  );
};

export default Routes;
