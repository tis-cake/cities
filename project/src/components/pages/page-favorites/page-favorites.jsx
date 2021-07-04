import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Favorites } from '../../favorites/favorites';

import { Selector } from '../../../store/selectors';
import { ActionServer } from '../../../server/actions';
import { ActionCreator } from '../../../store/actions';

function PageFavorites() {
  const dispatch = useDispatch();
  const cityName = useSelector((state) => Selector.getCityName(state));
  const favorites = useSelector((state) => Selector.getFavorites(state));
  const favoritesCount = favorites.length;

  const mainElEmptyClass = (favoritesCount === 0)
    ? 'page__main--favorites-empty'
    : '';

  const fetchFavorites = (ID) => dispatch(ActionServer.fetchFavorites(ID));

  const setCityName = (city) => {
    dispatch(ActionCreator.setCityName(city));
    dispatch(ActionCreator.setFilteredOffers());
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="page">
      <Header />

      <main className={`page__main page__main--favorites ${mainElEmptyClass}`}>
        <div className="page__favorites-container container">
          <Favorites
            favorites={favorites}
            cityName={cityName}
            setCityName={setCityName}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export { PageFavorites };
