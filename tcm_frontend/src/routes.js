import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './Screens/User/Account/Login';
import SignUp from './Screens/User/Account/SignUp';
import Feed from './Screens/Feed';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/feed" component={Feed} />
    </Switch>
  );
};

export default Routes;
