import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from './screens/user/account/Login';
import SignUp from './screens/user/account/SignUp';
import CreateTournament1 from './screens/tournament/CreateTournament1';
import Feed from './screens/Feed';
import Profile from './screens/Profile';
<<<<<<< HEAD
import MyTournament from './screens/tournament/Mytournament';
import SolicitationTournament from './screens/SolicitationTournament';
=======
import ViewTournament from './screens/tournament/ViewTournament';
>>>>>>> 3c4a58200ef296b602c33ba90efa3bf18c4dfa4e

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/create_tournament" component={CreateTournament1} />
      <Route path="/feed" component={Feed} />
<<<<<<< HEAD
      <Route path="/mytournament" component={MyTournament} />
      <Route path="/solicitation" component={SolicitationTournament} />
=======
      <Route path="/viewtournament" component={ViewTournament} />
>>>>>>> 3c4a58200ef296b602c33ba90efa3bf18c4dfa4e
    </Switch>
  );
};

export default Routes;
