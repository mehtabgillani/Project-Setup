import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DynamicOptions from '../../../../../pages/dynamicOptions/'; 
export default () => (
  <Switch>
    <Route path="/dynamic-options" component={DynamicOptions} />
  </Switch>
);
