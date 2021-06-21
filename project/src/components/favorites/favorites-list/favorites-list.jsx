import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { FavoritesItem } from '../favorites-item/favorites-item';

import { propTypesOffers } from '../../../types';

const getFilteredOffersFavoritesOnCities = (offers) => {
  const result = {};

  for (const offer of Object.values(offers)) {
    if (result[offer.city.name]) {
      result[offer.city.name].push(offer);
    } else {
      result[offer.city.name] = [offer];
    }
  }

  return result;
};

function FavoritesList({ cityName, offers }) {
  const favoritesList = getFilteredOffersFavoritesOnCities(offers);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesList).map(([city, offersFavorites]) => (
        <FavoritesItem
          key={nanoid()}
          offers={offersFavorites}
          cityCurrent={cityName}
          city={city}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: propTypesOffers,
};

export { FavoritesList };
