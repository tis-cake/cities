import { ActionType } from '../../actions';
import { SortType, DEFAULT_CITY } from '../../../const';
import {
  prepareInitialDataStructure,
  getChangedOffersByFavorite,
  getFilteredOffersByID,
  getSortedOffersID
} from '../../../utils/store';

const initialState = {
  cityName: DEFAULT_CITY,
  sortType: SortType.DEFAULT,

  offers: {},
  offersOnCitiesID: {},
  favoritesOffers: {},
  filteredOffers: [],

  isDataLoaded: false,
};

const main = (state = initialState, action) => {
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
      const { offersOnCitiesID } = prepareInitialDataStructure(payload);

      const filteredOffers = getFilteredOffersByID(payload, offersOnCitiesID[state.cityName][state.sortType]);

      return {
        ...state,
        offers: payload,
        offersOnCitiesID: offersOnCitiesID,
        filteredOffers: filteredOffers,
        isDataLoaded: true,
      };
    }

    case ActionType.CHANGE_OFFERS_BY_FAVORITE: {
      const { payload: id } = action;
      const offers = getChangedOffersByFavorite(state.offers, id);

      return {
        ...state,
        offers,
      };
    }

    default: {
      return (state);
    }
  }
};

export { main };
