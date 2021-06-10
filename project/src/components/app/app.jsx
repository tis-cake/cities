import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { PageMain } from '../pages/page-main/page-main';
import { PageFavorites } from '../pages/page-favorites/page-favorites';
import { PageRoomDetail } from '../pages/page-room-detail/page-room-detail';
import { PageLogin } from '../pages/page-login/page-login';
import { PageNotFound } from '../pages/page-not-found/page-not-found';

import { AppRoute } from '../../const';
import { UserContext } from '../../context';
import { propTypesHotel, propTypesUser } from '../../types';

function App(props) {
  const { placesList, userData } = props;
  const [userDataContext, setUserDataContext] = useState(userData);

  return (
    <UserContext.Provider value={[userDataContext, setUserDataContext]}>
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <PageMain
              placesList={placesList}
            />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <PageFavorites
              placesList={placesList}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <PageLogin
              userDataContext={userDataContext}
              setUserDataContext={setUserDataContext}
            />
          </Route>
          <Route exact path={`${AppRoute.ROOM_DETAIL}/:id`}>
            <PageRoomDetail
              placesList={placesList}
            />
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
  userData: PropTypes.shape(propTypesUser),
};

export { App };
