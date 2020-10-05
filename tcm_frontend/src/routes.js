import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './screens/user/account/Login';
import SignUp from './screens/user/account/SignUp';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
