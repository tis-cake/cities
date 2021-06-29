import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {AppRoute, AuthorizationStatus} from '../../const';

function PrivateRouteBase({render, path, exact, authorizationStatus}) {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const PrivateRoute = connect(mapStateToProps, null)(PrivateRouteBase);

PrivateRouteBase.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export { PrivateRouteBase, PrivateRoute };
