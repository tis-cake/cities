// import { combineReducers } from 'redux';

import { ActionType } from './actions';

import { SortType, AuthorizationStatus, DEFAULT_CITY } from '../const';
import {
  prepareInitialDataStructure,
  getFilteredOffersByID,
  getSortedOffersID
} from '../utils/store';

const initialState = {
  cityName: DEFAULT_CITY,
  sortType: SortType.DEFAULT,

  offers: {},
  offersOnCitiesID: {},
  favoritesOffers: {},
  filteredOffers: [],

  user: {},
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY_NAME: {
      return {
        ...state,
        cityName: action.payload,
        sortType: SortType.DEFAULT,
      };
    }

    case ActionType.SET_SORT_TYPE: {
      const defaultIDs = state.offersOnCitiesID[state.cityName][SortType.DEFAULT];
      const currentIDs = state.offersOnCitiesID[state.cityName][action.payload];

      if (defaultIDs.length !== 0 && currentIDs.length === 0) {
        const sortedOffersID = getSortedOffersID(state.filteredOffers, state.cityName, action.payload);

        return {
          ...state,
          sortType: action.payload,

          offersOnCitiesID: {
            ...state.offersOnCitiesID,
            [state.cityName]: {
              ...state.offersOnCitiesID[state.cityName],
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

        filteredOffers: getFilteredOffersByID(state.offers, state.offersOnCitiesID[state.cityName][state.sortType]),
      };
    }

    case ActionType.SET_INIT_OFFERS: {
      const { payload } = action;
      const {
        favoritesOffers,
        offersOnCitiesID,
      } = prepareInitialDataStructure(payload);

      const filteredOffers = getFilteredOffersByID(payload, offersOnCitiesID[state.cityName][state.sortType]);

      return {
        ...state,
        offers: payload,
        offersOnCitiesID: offersOnCitiesID,
        filteredOffers: filteredOffers,
        favoritesOffers: favoritesOffers,
        isDataLoaded: true,
      };
    }

    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        user: {},
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    default: {
      return (state);
    }
  }
};

export { reducer };
