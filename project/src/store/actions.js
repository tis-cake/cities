const ActionType = {
  SET_CITY_NAME: 'main/setCityName',
  SET_SORT_TYPE: 'main/setSortType',
  SET_INIT_OFFERS: 'main/setInitOffers',
  SET_FILTERED_OFFERS: 'main/setFilteredOffers',
  CHANGE_OFFERS_BY_FAVORITE: 'main/changeOffersByFavorite',

  SET_REVIEWS: 'reviews/setReviews',
  SET_FAVORITES: 'favorites/setFavorites',

  LOGOUT: 'user/logout',
  SET_USER: 'user/setUser',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',

  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute',
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

function changeOffersByFavorite(id) {
  return {
    type: ActionType.CHANGE_OFFERS_BY_FAVORITE,
    payload: id,
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

function setFavorites(favorites) {
  return {
    type: ActionType.SET_FAVORITES,
    payload: favorites,
  };
}

function logout() {
  return {
    type: ActionType.LOGOUT,
  };
}

function requireAuthorization(status) {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  };
}

function redirectToRoute(url) {
  return {
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  };
}

const ActionCreator = {
  setCityName,
  setSortType,
  setInitOffers,
  setFilteredOffers,
  changeOffersByFavorite,

  setReviews,
  setFavorites,

  setUser,
  logout,
  redirectToRoute,
  requireAuthorization,
};

export { ActionType, ActionCreator };
