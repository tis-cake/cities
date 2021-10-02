import { TDefaultRootState, NameSpace } from '../root-reducer';
import { IOffer } from '../../../interfaces';

const getCityName = (state: TDefaultRootState): string => state[NameSpace.MAIN].cityName;
const getSortType = (state: TDefaultRootState): string => state[NameSpace.MAIN].sortType;
const getFilteredOffers = (state: TDefaultRootState): [] | IOffer[] => state[NameSpace.MAIN].filteredOffers;
const getDataLoadedStatus = (state: TDefaultRootState): boolean => state[NameSpace.MAIN].isDataLoaded;

const SelectorMain = {
  getCityName,
  getSortType,
  getFilteredOffers,
  getDataLoadedStatus,
};

export { SelectorMain };
