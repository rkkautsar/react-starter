import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './containers/Home';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="*" component={NotFound} />
  </Switch>
);
