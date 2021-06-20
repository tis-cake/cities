// временно тут, пока нет данных с сервера
const mapObjID = (items) => {
  const result = {};

  for (const item of items) {
    result[item.id] = item;
  }

  return result;
};

const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  ROOM_DETAIL: '/offer',
  FAVORITES: '/favorites',
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

const defaultUserData = {
  isAuthorized: false,
  email: '',
};

export {
  AppRoute,
  Cities,
  СitiesLocation,

  DEFAULT_CITY,

  defaultUserData,
  mapObjID
};
