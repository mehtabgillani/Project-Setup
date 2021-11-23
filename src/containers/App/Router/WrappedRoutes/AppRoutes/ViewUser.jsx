import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewUser from '../../../../../pages/users/ViewUser';
export default () => (
  <Switch>
    <Route path="/view-user-details" component={ViewUser} />
  </Switch>
);
