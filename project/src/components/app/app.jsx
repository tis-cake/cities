import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { PageMain } from '../pages/page-main/page-main';
import { PageFavorites } from '../pages/page-favorites/page-favorites';
import { PageRoomDetail } from '../pages/page-room-detail/page-room-detail';
import { PageLogin } from '../pages/page-login/page-login';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

import { AppRoute, UserData } from '../../const';
import { UserContext } from '../../context';
import { propTypesHotel } from '../../types';

function App(props) {
  const { placesList } = props;

  return (
    <UserContext.Provider value={UserData}>
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
          <Route exact path={AppRoute.LOGIN}>
            <PageLogin />
          </Route>
          <Route exact path={`${AppRoute.ROOM_DETAIL}/:id`}>
            <PageRoomDetail />
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
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
};

export { App };
