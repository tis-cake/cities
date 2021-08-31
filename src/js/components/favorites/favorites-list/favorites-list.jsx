import React from 'react';
import PropTypes from 'prop-types';

import { FavoritesItem } from '../favorites-item/favorites-item';

import { propTypesOffersARR } from '../../../types';

const getFilteredFavoritesOnCities = (offers) => {
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

function FavoritesList(props) {
  const { cityName, setCityName, favorites } = props;

  const favoritesList = getFilteredFavoritesOnCities(favorites);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesList).map(([city, offersFavorites]) => (
        <FavoritesItem
          key={`favorites-item-${city}`}
          offers={offersFavorites}
          cityCurrent={cityName}
          city={city}
          setCityName={setCityName}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  cityName: PropTypes.string.isRequired,
  setCityName: PropTypes.func.isRequired,
  favorites: propTypesOffersARR,
};

export { FavoritesList };
