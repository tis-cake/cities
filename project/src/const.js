import {
  sortPriceLowToHigh,
  sortPriceHighToLow,
  sortRatingLowToHigh,
  sortRatingHighToLow
} from './utils/sort';

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  DETAIL_OFFER: '/offer',
  FAVORITES: '/favorites',
  NOT_FOUND: '/404',
};

const APIRoute = {
  REVIEWS: '/comments',
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

const SortType = {
  DEFAULT: 'DEFAULT',
  PRICE_LOW_TO_HIGH: 'PRICE_LOW_TO_HIGH',
  PRICE_HIGH_TO_LOW: 'PRICE_HIGH_TO_LOW',
  RATING_LOW_TO_HIGH: 'RATING_LOW_TO_HIGH',
  RATING_HIGH_TO_LOW: 'RATING_HIGH_TO_LOW',
};

const SortTypeValue = {
  [SortType.DEFAULT]: 'Popular',
  [SortType.PRICE_LOW_TO_HIGH]: 'Price: low to high',
  [SortType.PRICE_HIGH_TO_LOW]: 'Price: high to low',
  [SortType.RATING_LOW_TO_HIGH]: 'Top rated last',
  [SortType.RATING_HIGH_TO_LOW]: 'Top rated first',
};

const SortTypeAction = {
  [SortType.DEFAULT]: [],
  [SortType.PRICE_LOW_TO_HIGH]: sortPriceLowToHigh,
  [SortType.PRICE_HIGH_TO_LOW]: sortPriceHighToLow,
  [SortType.RATING_LOW_TO_HIGH]: sortRatingLowToHigh,
  [SortType.RATING_HIGH_TO_LOW]: sortRatingHighToLow,
};

const Cities = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

const DEFAULT_CITY = Cities.PARIS;

const DEFAULT_ZOOM = 10;

const СitiesLocation = {
  [Cities.PARIS]: {
    latitude: 48.856663,
    longitude: 2.351556,
    zoom: DEFAULT_ZOOM,
  },
  [Cities.COLOGNE]: {
    latitude: 50.930779,
    longitude: 6.938399,
    zoom: DEFAULT_ZOOM,
  },
  [Cities.BRUSSELS]: {
    latitude: 50.846697,
    longitude: 4.352544,
    zoom: DEFAULT_ZOOM,
  },
  [Cities.AMSTERDAM]: {
    latitude: 52.373057,
    longitude: 4.892557,
    zoom: DEFAULT_ZOOM,
  },
  [Cities.HAMBURG]: {
    latitude: 53.550688,
    longitude: 9.992895,
    zoom: DEFAULT_ZOOM,
  },
  [Cities.DUSSELDORF]: {
    latitude: 51.230569,
    longitude: 6.787428,
    zoom: DEFAULT_ZOOM,
  },
};

const KeyCode = {
  ESC: 27,
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export {
  AppRoute,
  APIRoute,
  SortType,
  SortTypeValue,
  SortTypeAction,
  Cities,
  СitiesLocation,
  KeyCode,
  AuthorizationStatus,

  DEFAULT_CITY
};
