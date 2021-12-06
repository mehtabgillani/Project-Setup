import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddSubUser from '../../../../../pages/subusers/AddSubUser'; 
export default () => (
  <Switch>
    <Route path="/add-subuser" component={AddSubUser} /> 
    <Route path="/edit-subuser" component={AddSubUser} />
  </Switch>
);
