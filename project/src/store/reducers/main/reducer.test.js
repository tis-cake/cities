import { main } from './reducer';

import { SortType, DEFAULT_CITY } from '../../../const';
import { ActionType } from '../../actions';
import {
  prepareInitialDataStructure,
  getFilteredOffersByFavorite
} from '../../../utils/store';

const initialState = {
  cityName: DEFAULT_CITY,
  sortType: SortType.DEFAULT,

  offers: {},
  offersOnCitiesID: {},
  filteredOffers: [],

  isDataLoaded: false,
};

const offers = {
  '1': {
    id: 1,
    title: 'Offer 1',
    city: {
      name: DEFAULT_CITY,
    },
  },
  '5': {
    id: 5,
    title: 'Offer 5',
    city: {
      name: DEFAULT_CITY,
    },
  },
  '42': {
    id: 42,
    title: 'Offer 42',
    city: {
      name: DEFAULT_CITY,
    },
  },
};

const filteredOffers = [
  {
    id: 1,
    title: 'Offer 1',
    city: {
      name: DEFAULT_CITY,
    },
  },
  {
    id: 5,
    title: 'Offer 5',
    city: {
      name: DEFAULT_CITY,
    },
  },
  {
    id: 42,
    title: 'Offer 42',
    city: {
      name: DEFAULT_CITY,
    },
  },
];

describe('Reducer: [main]', () => {
  it('without additional parameters should return initial state', () => {
    expect(main(undefined, {}))
      .toEqual(initialState);
  });

  it('should update [cityName, sortType] after action [setCityName]', () => {
    const state = {
      cityName: DEFAULT_CITY,
      sortType: SortType.DEFAULT,
    };

    const expectedPayload = 'Amsterdam';

    const expectedResult = {
      cityName: expectedPayload,
      sortType: SortType.DEFAULT,
    };

    const requiredAction = {
      type: ActionType.SET_CITY_NAME,
      payload: expectedPayload,
    };

    expect(main(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [sortType, offersOnCitiesID] after action [setSortType]', () => {
    const offersOnCitiesID = {
      [DEFAULT_CITY]: {
        [SortType.DEFAULT]: [1, 5, 42],
      },
    };

    const state = {
      cityName: DEFAULT_CITY,
      offersOnCitiesID: offersOnCitiesID,
    };

    const expectedPayload = SortType.DEFAULT;

    const expectedResult = {
      ...state,
      sortType: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: expectedPayload,
    };

    expect(main(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [state] after action [setInitOffers]', () => {
    const expectedPayload = offers;

    const { offersOnCitiesID } = prepareInitialDataStructure(expectedPayload);

    const expectedResult = {
      ...initialState,
      offers: expectedPayload,
      offersOnCitiesID: offersOnCitiesID,
      filteredOffers: filteredOffers,
      isDataLoaded: true,
    };

    const requiredAction = {
      type: ActionType.SET_INIT_OFFERS,
      payload: expectedPayload,
    };

    expect(main(initialState, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [filteredOffers] after action [setFilteredOffers]', () => {
    const offersOnCitiesID = {
      'Amsterdam': {
        [SortType.DEFAULT]: [1, 5, 42],
      },
    };

    const state = {
      cityName: 'Amsterdam',
      sortType: SortType.DEFAULT,

      offers: offers,
      filteredOffers: [],
      offersOnCitiesID: offersOnCitiesID,
    };

    const expectedResult = {
      ...state,
      filteredOffers: filteredOffers,
    };

    const requiredAction = {
      type: ActionType.SET_FILTERED_OFFERS,
    };

    expect(main(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [filteredOffers] after action [changeOffersByFavorite]', () => {
    const state = {
      filteredOffers: filteredOffers,
    };

    const expectedPayload = 42;

    const expectedResult = {
      filteredOffers: getFilteredOffersByFavorite(state.filteredOffers, expectedPayload),
    };

    const requiredAction = {
      type: ActionType.CHANGE_OFFERS_BY_FAVORITE,
      payload: expectedPayload,
    };

    expect(main(state, requiredAction))
      .toEqual(expectedResult);
  });
});
