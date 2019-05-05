import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { component: Component, isAuthorize, path } = this.props;
    console.log(this.props);
    return (
      <Route
        path={path}
        render={() =>
          isAuthorize ? <Component /> : <Redirect to="/login">></Redirect>
        }
      />
    );
  }
}

export default withAuth(PrivateRoute);
