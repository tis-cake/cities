import { IOffer } from '../../../interfaces';
import { TOffersByID, TOffersByCitiesID } from '../../../types';

type TMainReducer = {
  cityName: string,
  sortType: string,
  isDataLoaded: boolean,
  offers: {} | TOffersByID,
  offersByCitiesID: {} | TOffersByCitiesID,
  filteredOffers: [] | IOffer[],
};

export { TMainReducer };
