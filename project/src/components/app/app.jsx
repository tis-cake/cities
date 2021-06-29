import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from '../private-route/private-route';
import { PageMain } from '../pages/page-main/page-main';
import { PageLogin } from '../pages/page-login/page-login';
import { PageLoading } from '../pages/page-loading/page-loading';
import { PageNotFound } from '../pages/page-not-found/page-not-found';
import { PageFavorites } from '../pages/page-favorites/page-favorites';
import { PageDetailOffer } from '../pages/page-detail-offer/page-detail-offer';

import { browserHistory } from '../../services/browser-history';
import { AppRoute, AuthorizationStatus } from '../../const';

function AppBase(props) {
  const { authorizationStatus, isDataLoaded } = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
    return (
      <PageLoading />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <PageMain />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <PageFavorites />}
        />

        <Route exact path={AppRoute.LOGIN}>
          <PageLogin />
        </Route>

        <Route exact path={`${AppRoute.DETAIL_OFFER}/:id`}>
          <PageDetailOffer />
        </Route>

        <Route exact path={AppRoute.NOT_FOUND}>
          <PageNotFound />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

const App = connect(mapStateToProps, null)(AppBase);

AppBase.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

export { AppBase, App };
