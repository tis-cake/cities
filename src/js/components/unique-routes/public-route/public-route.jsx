import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { Selector } from '../../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../../../const';

function PublicRoute({ render, path, exact }) {
  const authorizationStatus = useSelector((state) => Selector.getAuthorizationStatus(state));

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.NO_AUTH
          ? render(routeProps)
          : <Redirect to={AppRoute.ROOT} />
      )}
    />
  );
}

PublicRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export { PublicRoute };
