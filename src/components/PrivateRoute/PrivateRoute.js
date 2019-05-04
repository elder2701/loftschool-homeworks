import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Switch, Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { isAuthorizate, path, component } = this.props;
    if (isAuthorizate) {
      return (
        <Switch>
          <Route path="/app" component={component} />
          <Redirect to="/app" />
        </Switch>
      );
    }
    return <Redirect to="/login" />;
  }
  /*Route на логин
  Redirect на app*/
}

export default withAuth(PrivateRoute);
