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

const citiesLocation = {
  [Cities.AMSTERDAM]: {
    latitude: 52.38333,
    longitude: 4.9,
    zoom: 10,
  },
};

const defaultUserData = {
  isAuthorized: false,
  email: '',
};

export {
  AppRoute,
  citiesLocation,
  defaultUserData
};
