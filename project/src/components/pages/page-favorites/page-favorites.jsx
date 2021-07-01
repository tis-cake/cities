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
  const favoritesOffers = useSelector((state) => Selector.getFavoritesOffers(state));

  const setCityName = (city) => {
    dispatch(ActionCreator.setCityName(city));
    dispatch(ActionCreator.setFilteredOffers());
  };

  const offersCount = Object.values(favoritesOffers).length;

  const mainElEmptyClass = (offersCount === 0)
    ? 'page__main--favorites-empty'
    : '';

  return (
    <div className="page">
      <Header />

      <main className={`page__main page__main--favorites ${mainElEmptyClass}`}>
        <div className="page__favorites-container container">
          <Favorites
            offers={favoritesOffers}
            offersCount={offersCount}
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
