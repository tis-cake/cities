import React from 'react';

import { FavoritesFilled } from './favorites-filled/favorites-filled';
import { FavoritesEmpty } from './favorites-empty/favorites-empty';

import { IFavoritesComponentsProps } from './interfaces';

const Favorites: React.FC<IFavoritesComponentsProps> = (props) => {
  const { favorites: { length: favoritesCount } } = props;

  return (
    (favoritesCount > 0) ? <FavoritesFilled {...props} /> : <FavoritesEmpty />
  );
};

export { Favorites };
