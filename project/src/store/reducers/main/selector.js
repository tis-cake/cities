import { NameSpace } from '../root-reducer';

const getCityName = (state) => state[NameSpace.MAIN].cityName;
const getSortType = (state) => state[NameSpace.MAIN].sortType;
const getFilteredOffers = (state) => state[NameSpace.MAIN].filteredOffers;
const getDataLoadedStatus = (state) => state[NameSpace.MAIN].isDataLoaded;

const SelectorMain = {
  getCityName,
  getSortType,
  getFilteredOffers,
  getDataLoadedStatus,
};

export { SelectorMain };
