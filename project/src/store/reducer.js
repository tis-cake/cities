import { ActionType } from './actions';

import { DEFAULT_CITY } from '../const';
import { prepareInitialData, getFilteredOffers } from '../utils/store';

const initialState = {
  cityName: DEFAULT_CITY,

  offers: {},
  filteredOffers: [],
  favoritesOffers: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY_NAME: {
      return {
        ...state,
        cityName: action.payload,
      };
    }

    case ActionType.SET_OFFERS: {
      const { payload } = action;
      const { favoritesOffers, ID_OFFERS_ON_CITIES } = prepareInitialData(payload);
      const filteredOffers = getFilteredOffers(payload, ID_OFFERS_ON_CITIES[state.cityName]);

      return {
        ...state,
        offers: payload,
        filteredOffers: filteredOffers,
        favoritesOffers: favoritesOffers,
        ID_OFFERS_ON_CITIES: ID_OFFERS_ON_CITIES,
      };
    }

    default: {
      return (state);
    }
  }
};

export { reducer };
