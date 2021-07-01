import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Favorites } from '../../favorites/favorites';

import { Selector } from '../../../store/selectors';
import { ActionCreator } from '../../../store/actions';

function PageFavorites() {
  const dispatch = useDispatch();
  const cityName = useSelector((state) => Selector.getCityName(state));
  const favorites = useSelector((state) => Selector.getFavorites(state));
  const favoritesCount = Object.values(favorites).length;

  const mainElEmptyClass = (favoritesCount === 0)
    ? 'page__main--favorites-empty'
    : '';

  const setCityName = (city) => {
    dispatch(ActionCreator.setCityName(city));
    dispatch(ActionCreator.setFilteredOffers());
  };

  return (
    <div className="page">
      <Header />

      <main className={`page__main page__main--favorites ${mainElEmptyClass}`}>
        <div className="page__favorites-container container">
          <Favorites
            favorites={favorites}
            favoritesCount={favoritesCount}
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
