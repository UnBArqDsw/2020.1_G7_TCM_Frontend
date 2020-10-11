import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './screens/user/account/Login';
import SignUp from './screens/user/account/SignUp';
import RegisterII from './screens/tournament/RegisterII';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/tournament2" component={RegisterII} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
