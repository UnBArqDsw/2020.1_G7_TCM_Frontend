import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './Screens/User/Account/Login';
import SignUp from './Screens/User/Account/SignUp';
import Profile from './Screens/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
