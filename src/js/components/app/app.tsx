import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';

import { PublicRoute } from '../unique-routes/public-route/public-route';
import { PrivateRoute } from '../unique-routes/private-route/private-route';

import { PageMain } from '../pages/page-main/page-main';
import { PageLogin } from '../pages/page-login/page-login';
import { PageLoading } from '../pages/page-loading/page-loading';
import { PageNotFound } from '../pages/page-not-found/page-not-found';
import { PageFavorites } from '../pages/page-favorites/page-favorites';
import { PageDetailOffer } from '../pages/page-detail-offer/page-detail-offer';

import { AppRoute } from '../../const';
import { Selector } from '../../store/selectors';
import { browserHistory } from '../../services/browser-history';

const App: React.FC = () => {
  const isDataLoaded: boolean = useSelector((state) => Selector.getDataLoadedStatus(state));

  if (!isDataLoaded) {
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

        <PublicRoute
          exact
          path={AppRoute.LOGIN}
          render={() => <PageLogin />}
        />

        <Route exact path={AppRoute.DETAIL_OFFER_PARAMS}>
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
};

export { App };
