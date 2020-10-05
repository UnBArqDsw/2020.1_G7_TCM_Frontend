import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from './Screens/User/Account/Login';
import SignUp from './Screens/User/Account/SignUp';
import RegisterII from './Screens/Tournament/RegisterII';

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
