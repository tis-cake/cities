import { TDefaultRootState, NameSpace } from '../root-reducer';
import { IOffer } from '../../../interfaces';

const getFavorites = (state: TDefaultRootState): [] | IOffer[] => state[NameSpace.FAVORITES].favorites;
const getFavoritesDataLoadedStatus = (state: TDefaultRootState): boolean => state[NameSpace.FAVORITES].isDataLoaded;

const SelectorFavorites = {
  getFavorites,
  getFavoritesDataLoadedStatus,
};

export { SelectorFavorites };
