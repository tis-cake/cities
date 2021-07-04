import { NameSpace } from '../root-reducer';

const getFavorites = (state) => state[NameSpace.FAVORITES].favorites;
const getFavoritesDataLoadedStatus = (state) => state[NameSpace.FAVORITES].isDataLoaded;

const SelectorFavorites = {
  getFavorites,
  getFavoritesDataLoadedStatus,
};

export { SelectorFavorites };
