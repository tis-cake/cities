import React from 'react';

import { FavoritesList } from '../favorites-list/favorites-list';

import { IFavoritesComponentsProps } from '../interfaces';

const FavoritesFilled:React.FC<IFavoritesComponentsProps> = ({ favorites, cityName, setCityName }) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <FavoritesList
        favorites={favorites}
        cityName={cityName}
        setCityName={setCityName}
      />
    </section>
  );
};

export { FavoritesFilled };
