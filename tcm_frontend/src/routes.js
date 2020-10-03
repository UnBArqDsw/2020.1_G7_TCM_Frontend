import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './Screens/User/Account/Login';
import SignUp from './Screens/User/Account/SignUp';
import CreateTournament1 from './Screens/Tournament/CreateTournament1';

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
