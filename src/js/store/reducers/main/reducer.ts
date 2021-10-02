import { ActionType } from '../../actions';
import { SortType, DEFAULT_CITY } from '../../../const';

import { TMainReducer } from './types';
import { IOffer } from '../../../interfaces';
import { TOffersByCitiesID } from '../../../types';

import {
  prepareInitialDataStructure,
  getFilteredOffersByFavorite,
  getFilteredOffersByID,
  getSortedOffersID,
} from '../../../utils/store';

const initialState: TMainReducer = {
  cityName: DEFAULT_CITY,
  sortType: SortType.DEFAULT,

  isDataLoaded: false,

  offers: {},
  offersByCitiesID: {},
  filteredOffers: [],
};

const main = (state = initialState, action): TMainReducer => {
  switch (action.type) {
    case ActionType.SET_CITY_NAME: {
      return {
        ...state,
        cityName: action.payload,
        sortType: SortType.DEFAULT,
      };
    }

    case ActionType.SET_SORT_TYPE: {
      const defaultIDs: number[] = state.offersByCitiesID[state.cityName][SortType.DEFAULT];
      const currentIDs: [] | number[] = state.offersByCitiesID[state.cityName][action.payload];

      if (defaultIDs.length !== 0 && currentIDs.length === 0) {
        const sortedOffersID: number[] = getSortedOffersID(state.filteredOffers, action.payload);

        return {
          ...state,
          sortType: action.payload,

          offersByCitiesID: {
            ...state.offersByCitiesID,
            [state.cityName]: {
              ...state.offersByCitiesID[state.cityName],
              [action.payload]: sortedOffersID,
            },
          },
        };
      }

      return {
        ...state,
        sortType: action.payload,
      };
    }

    case ActionType.SET_FILTERED_OFFERS: {
      return {
        ...state,
        filteredOffers: getFilteredOffersByID(state.offers, state.offersByCitiesID[state.cityName][state.sortType]),
      };
    }

    case ActionType.CHANGE_OFFERS_BY_FAVORITE: {
      return {
        ...state,
        filteredOffers: getFilteredOffersByFavorite(state.filteredOffers, action.payload),
      };
    }

    case ActionType.SET_INIT_OFFERS: {
      const { payload } = action;

      const offersByCitiesID: TOffersByCitiesID = prepareInitialDataStructure(payload);
      const filteredOffers: IOffer[] = getFilteredOffersByID(payload, offersByCitiesID[state.cityName][state.sortType]);

      return {
        ...state,
        offers: payload,
        offersByCitiesID,
        filteredOffers,
        isDataLoaded: true,
      };
    }

    default: {
      return (state);
    }
  }
};

export { main };
