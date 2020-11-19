/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { IsAuthenticated } from './auth';

import Login from './screens/user/account/Login';
import SignUp from './screens/user/account/SignUp';
import CreateTournament1 from './screens/tournament/CreateTournament1';
import Feed from './screens/Feed';
import Profile from './screens/Profile';
import ButtonBox from './components/ButtonClearOrCheck';
import Stats from './screens/tournament/Stats';
import MyTournament from './screens/tournament/Mytournament';
import SolicitationTournament from './screens/SolicitationTournament';
import ViewTournament from './screens/tournament/ViewTournament';
import ViewTournamentInfo from './screens/tournament/ViewTournamentInfo';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      IsAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/create_tournament" component={CreateTournament1} />
      <PrivateRoute path="/feed" component={Feed} />
      <PrivateRoute path="/teste" component={ButtonBox} />
      <PrivateRoute path="/stats" component={Stats} />
      <PrivateRoute path="/tournament/:id" component={ViewTournamentInfo} />
      <PrivateRoute path="/mytournament" component={MyTournament} />
      <PrivateRoute path="/viewtournament" component={ViewTournament} />
      <PrivateRoute
        path="/solicitation/:id"
        component={SolicitationTournament}
      />
    </Switch>
  );
};

export default Routes;
