import React from 'react';
import PropTypes from 'prop-types';

import { FavoritesFilled } from './favorites-filled/favorites-filled';
import { FavoritesEmpty } from './favorites-empty/favorites-empty';

import { propTypesOffers } from '../../types';

function Favorites(props) {
  const { favoritesCount } = props;

  return (
    (favoritesCount > 0) ? <FavoritesFilled {...props}/> : <FavoritesEmpty />
  );
}

Favorites.propTypes = {
  favorites: propTypesOffers,
  favoritesCount: PropTypes.number.isRequired,
};

export { Favorites };
