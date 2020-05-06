import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home } from '../routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
