import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { PageMain } from '../pages/page-main/page-main';
import { PageFavorites } from '../pages/page-favorites/page-favorites';
import { PageProperty } from '../pages/page-property/page-property';
import { PageLogin } from '../pages/page-login/page-login';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

import { AppRoute } from '../../const';
import { propTypesHotel } from '../../types';

function App(props) {
  const { placesList } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <PageMain
            placesList={placesList}
          />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <PageFavorites />
        </Route>
        {/*<Route exact path={AppRoute.PROPERTY}>
          <PageProperty />
        </Route>*/}
        <Route exact path={AppRoute.LOGIN}>
          <PageLogin />
        </Route>
        <Route exact path="/offer/:id">
          <PageProperty />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
};

export { App };
