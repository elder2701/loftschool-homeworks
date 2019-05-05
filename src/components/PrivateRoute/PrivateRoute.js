import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    console.log(this.props);
    const { component: Component, isAuthorized, path } = this.props;
    if (isAuthorized) return <Route path={path} component={Component} />;
    return <Redirect to="/login" />;
  }
}

export default withAuth(PrivateRoute);
