import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SubUsers from '../../../../../pages/subusers'; 
export default () => (
  <Switch>
    <Route path="/subusers" component={SubUsers} /> 
  </Switch>
);
