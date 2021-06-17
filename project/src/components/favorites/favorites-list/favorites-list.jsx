import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { FavoritesItem } from '../favorites-item/favorites-item';

import { propTypesHotel } from '../../../types';

const getFavoritesListFilteredCity = (placesList) => {
  const result = {};

  for (const place of placesList) {
    if (place.isFavorite) {
      if (result[place.city.name]) {
        result[place.city.name].push(place);
      } else {
        result[place.city.name] = [place];
      }
    }
  }

  return result;
};

function FavoritesList(props) {
  const { placesList, currentCity } = props;

  const favoritesList = getFavoritesListFilteredCity(placesList);

  return (
    <ul className="favorites__list">
      {Object.entries(favoritesList).map(([city, places]) => (
        <FavoritesItem
          key={nanoid()}
          placesList={places}
          nameCity={city}
          currentCity={currentCity}
        />
      ))}
    </ul>
  );
}

FavoritesList.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
  currentCity: PropTypes.string.isRequired,
};

export { FavoritesList };
