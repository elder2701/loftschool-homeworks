import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import LoginForm from '../LoginForm';
import AppRouter from '../AppRouter';
import { AuthProvider } from '../../context/Auth';
import { DataProvider } from '../../context/Data';

export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/app" component={AppRouter} />
          <Route path="/login" component={LoginForm} />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);
