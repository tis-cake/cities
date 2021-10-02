import { IOffer } from '../../../interfaces';

type TFavoritesReducer = {
  favorites: [] | IOffer[],
  isDataLoaded: boolean,
};

export { TFavoritesReducer };
