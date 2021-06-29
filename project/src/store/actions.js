const ActionType = {
  SET_CITY_NAME: 'main/setCityName',
  SET_SORT_TYPE: 'main/setSortType',
  SET_INIT_OFFERS: 'main/setInitOffers',
  SET_FILTERED_OFFERS: 'main/setFilteredOffers',

  SET_USER: 'user/setUser',
  SET_REVIEWS: 'user/setReviews',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
};

function setCityName(cityName) {
  return {
    type: ActionType.SET_CITY_NAME,
    payload: cityName,
  };
}

function setSortType(sortType) {
  return {
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  };
}

function setInitOffers(initOffers) {
  return {
    type: ActionType.SET_INIT_OFFERS,
    payload: initOffers,
  };
}

function setFilteredOffers() {
  return {
    type: ActionType.SET_FILTERED_OFFERS,
  };
}

function setUser(user) {
  return {
    type: ActionType.SET_USER,
    payload: user,
  };
}

function setReviews(reviews) {
  return {
    type: ActionType.SET_REVIEWS,
    payload: reviews,
  };
}

function logout() {
  return {
    type: ActionType.LOGOUT,
  };
}

function redirectToRoute(url) {
  return {
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  };
}

function requireAuthorization(status) {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  };
}

const ActionCreator = {
  setCityName,
  setSortType,
  setInitOffers,
  setFilteredOffers,

  setUser,
  setReviews,
  logout,
  redirectToRoute,
  requireAuthorization,
};

export { ActionType, ActionCreator };
