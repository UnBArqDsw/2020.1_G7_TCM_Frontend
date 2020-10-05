import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './screens/user/account/Login';
import SignUp from './screens/user/account/SignUp';
import CreateTournament1 from './screens/tournament/CreateTournament1';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/create_tournament" component={CreateTournament1} />
    </Switch>
  );
};

export default Routes;
