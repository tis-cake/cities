import React from 'react';
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

function FavoritesList(props) {
  const { cityName, setCityName, offers } = props;

  const favoritesList = getFilteredOffersFavoritesOnCities(offers);

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
  offers: propTypesOffers,
};

export { FavoritesList };
