import { ActionType } from './actions';

import { DEFAULT_CITY } from '../const';
import { getFilteredOffersIdOnCities, getFilteredOffers } from '../utils/store';

const initialState = {
  cityName: DEFAULT_CITY,

  offers: {},
  filteredOffers: [],
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
      const ID_OFFERS_ON_CITIES = getFilteredOffersIdOnCities(payload);
      const filteredOffers = getFilteredOffers(payload, ID_OFFERS_ON_CITIES[state.cityName]);

      return {
        ...state,
        offers: payload,
        filteredOffers: filteredOffers,
        ID_OFFERS_ON_CITIES: ID_OFFERS_ON_CITIES,
      };
    }

    default: {
      return (state);
    }
  }
};

export { reducer };
