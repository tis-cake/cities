const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  DETAIL_OFFER: '/offer',
  DETAIL_OFFER_PARAMS: '/offer/:id',
  NOT_FOUND: '/404',
};

const APIRoute = {
  FAVORITES: '/favorite',
  REVIEWS: '/comments',
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
};

const HttpCode = {
  UNAUTHORIZED: 401,
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

const Cities = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

const DEFAULT_CITY = Cities.PARIS;

const DEFAULT_ZOOM = 12;

const CitiesLocation = {
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

const NotifyMessage = {
  DEFAULT: 'Заполните, пожалуйста, все поля!',
  PASSWORD_INCORRECT_SPACES: 'Пароль не может состоять из одних пробелов!',
};

export {
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  HttpCode,
  SortType,
  SortTypeValue,
  Cities,
  CitiesLocation,
  KeyCode,
  NotifyMessage,

  DEFAULT_CITY
};
