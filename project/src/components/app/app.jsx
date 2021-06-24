import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { PageMain } from '../pages/page-main/page-main';
import { PageFavorites } from '../pages/page-favorites/page-favorites';
import { PageDetailOffer } from '../pages/page-detail-offer/page-detail-offer';
import { PageLogin } from '../pages/page-login/page-login';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

import { AppRoute } from '../../const';
import { UserContext } from '../../context';
import { propTypesUser } from '../../types';

function App(props) {
  const { userData } = props;
  const [userDataContext, setUserDataContext] = useState(userData);

  return (
    <UserContext.Provider value={[userDataContext, setUserDataContext]}>
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <PageMain />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <PageFavorites />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <PageLogin />
          </Route>
          <Route exact path={`${AppRoute.DETAIL_OFFER}/:id`}>
            <PageDetailOffer />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

App.propTypes = {
  userData: PropTypes.shape(propTypesUser),
};

export { App };
