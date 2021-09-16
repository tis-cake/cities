import React from 'react';

import { FavoritesItem } from '../favorites-item/favorites-item';

import { IOffer, IOffersOnCities } from '../../../interfaces';
import { IFavoritesComponentsProps } from '../interfaces';

const getFilteredFavoritesOnCities = (offers: IOffer[]): IOffersOnCities => {
  const result = {};

  for (const offer of offers) {
    if (result[offer.city.name]) {
      result[offer.city.name].push(offer);
    } else {
      result[offer.city.name] = [offer];
    }
  }

  return result;
};

const FavoritesList: React.FC<IFavoritesComponentsProps> = (props) => {
  const { cityName, setCityName, favorites } = props;

  const favoritesList: IOffersOnCities = getFilteredFavoritesOnCities(favorites);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesList).map(([city, offersFavorites]) => (
        <FavoritesItem
          key={`favorites-item-${city}`}
          offers={offersFavorites}
          city={city}
          cityCurrent={cityName}
          setCityName={setCityName}
        />
      ))}
    </ul>
  );
};

export { FavoritesList };
