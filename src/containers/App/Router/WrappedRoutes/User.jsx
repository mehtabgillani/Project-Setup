import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserList from '../../../../pages/users/user'
import Alerts from '../../../UI/Alerts/index';

export default () => (
  <Switch>
    <Route path="/users" component={UserList} />
  
  </Switch>
);
