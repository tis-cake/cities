const ActionType = {
  SET_CITY_NAME: 'main/setCityName',
  SET_SORT_TYPE: 'main/setSortType',
  SET_INIT_OFFERS: 'main/setInitOffers',
  SET_FILTERED_OFFERS: 'main/setFilteredOffers',
  SET_DETAIL_OFFER_ACTIVE_ID: 'detail/setDetailOfferActiveID',

  SET_USER: 'user/setUser',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
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

function setDetailOfferActiveID(id) {
  return {
    type: ActionType.SET_DETAIL_OFFER_ACTIVE_ID,
    payload: id,
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
  setDetailOfferActiveID,

  setUser,
  logout,
  redirectToRoute,
  requireAuthorization,
};

export { ActionType, ActionCreator };
