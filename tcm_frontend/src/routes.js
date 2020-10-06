import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './screens/user/account/Login';
import SignUp from './screens/user/account/SignUp';
import Feed from './screens/Feed';
import Profile from './screens/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/feed" component={Feed} />
    </Switch>
  );
};

export default Routes;
