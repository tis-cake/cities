import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Favorites } from '../../favorites/favorites';
import { PageLoading } from '../page-loading/page-loading';

import { Selector } from '../../../store/selectors';
import { ActionServer } from '../../../server/actions';
import { ActionCreator } from '../../../store/actions';
import { IOffer } from '../../../interfaces';
import { TSetCityName } from '../../../types';

const PageFavorites: React.FC = () => {
  const dispatch = useDispatch();

  const isDataLoaded: boolean = useSelector((state) => Selector.getFavoritesDataLoadedStatus(state));
  const cityName: string = useSelector((state) => Selector.getCityName(state));
  const favorites: IOffer[] = useSelector((state) => Selector.getFavorites(state));
  const favoritesCount: number = favorites.length;

  const mainElEmptyClass: string = (favoritesCount === 0)
    ? 'page__main--favorites-empty'
    : '';

  const fetchFavorites = () => dispatch(ActionServer.fetchFavorites());

  const setCityName: TSetCityName = (city) => {
    dispatch(ActionCreator.setCityName(city));
    dispatch(ActionCreator.setFilteredOffers());
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  if (!isDataLoaded) {
    return (
      <PageLoading />
    );
  }

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
};

export { PageFavorites };
