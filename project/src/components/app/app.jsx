import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { PageMain } from '../pages/page-main/page-main';
import { PageLogin } from '../pages/page-login/page-login';
import { PageLoading } from '../pages/page-loading/page-loading';
import { PageNotFound } from '../pages/page-not-found/page-not-found';
import { PageFavorites } from '../pages/page-favorites/page-favorites';
import { PageDetailOffer } from '../pages/page-detail-offer/page-detail-offer';

import { AppRoute, AuthorizationStatus } from '../../const';
import { UserContext } from '../../context';
import { propTypesUser } from '../../types';

function AppBase(props) {
  const { userData, authorizationStatus, isDataLoaded } = props;
  const [userDataContext, setUserDataContext] = useState(userData);

  // eslint-disable-next-line no-console
  console.log(authorizationStatus, isDataLoaded);

  if (authorizationStatus === AuthorizationStatus.UNKNOWN || !isDataLoaded) {
    return (
      <PageLoading />
    );
  }

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

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

AppBase.propTypes = {
  userData: PropTypes.shape(propTypesUser),

  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const App = connect(mapStateToProps)(AppBase);

export { AppBase, App };
