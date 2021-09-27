import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { Selector } from '../../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../../../const';
import { IUniqueRoutesProps } from '../interfaces';

const PrivateRoute: React.FC<IUniqueRoutesProps> = ({ render, path, exact }) => {
  const authorizationStatus: string = useSelector((state) => Selector.getAuthorizationStatus(state));

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
};

export { PrivateRoute };
