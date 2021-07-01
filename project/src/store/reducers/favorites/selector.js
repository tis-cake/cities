import { NameSpace } from '../root-reducer';

const getFavorites = (state) => state[NameSpace.FAVORITES].favorites;

const SelectorFavorites = {
  getFavorites,
};

export { SelectorFavorites };
