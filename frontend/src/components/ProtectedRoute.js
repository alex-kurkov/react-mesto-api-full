import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />
      }
    </Route>
)}
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
export default ProtectedRoute;
