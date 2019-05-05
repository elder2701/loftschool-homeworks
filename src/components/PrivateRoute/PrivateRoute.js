import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    console.log(this.props);
    const { component: Component, isAuthorize, path } = this.props;
    if (isAuthorize) return <Route path={path} component={Component} />;
    return <Redirect to="/login" />;
  }
}

export default withAuth(PrivateRoute);
