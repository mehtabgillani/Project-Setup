import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddUser from '../../../../../pages/users/AddUser';
export default () => (
  <Switch>
    <Route path="/add-user" component={AddUser} />
    <Route path="/edit-user" component={AddUser} />
  </Switch>
);
