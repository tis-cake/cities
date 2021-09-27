import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { Selector } from '../../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { IUniqueRoutesProps } from '../interfaces';

const PublicRoute: React.FC<IUniqueRoutesProps> = ({ render, path, exact }) => {
  const authorizationStatus: string = useSelector((state) => Selector.getAuthorizationStatus(state));

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
};

export { PublicRoute };
