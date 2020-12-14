import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => (
    <Route>
      {
        () => (props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />)
      }
    </Route>
);
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};
export default ProtectedRoute;
