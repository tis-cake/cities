import React from 'react';

import { FavoritesFilled } from './favorites-filled/favorites-filled';
import { FavoritesEmpty } from './favorites-empty/favorites-empty';

import { propTypesOffersARR } from '../../types';

function Favorites(props) {
  const {
    favorites: {
      length: favoritesCount,
    },
  } = props;

  return (
    (favoritesCount > 0) ? <FavoritesFilled {...props}/> : <FavoritesEmpty />
  );
}

Favorites.propTypes = {
  favorites: propTypesOffersARR,
};

export { Favorites };
