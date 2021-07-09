const ActionType = {
  SET_CITY_NAME: 'main/setCityName',
  SET_SORT_TYPE: 'main/setSortType',
  SET_INIT_OFFERS: 'main/setInitOffers',
  SET_FILTERED_OFFERS: 'main/setFilteredOffers',
  CHANGE_OFFERS_BY_FAVORITE: 'main/changeOffersByFavorite',

  SET_REVIEWS: 'reviews/setReviews',
  SET_REVIEW_SENDED_STATUS: 'reviews/setSendedStatus',
  SET_REVIEW_SENDING_STATUS: 'reviews/setSendingStatus',
  SET_FAVORITES: 'favorites/setFavorites',

  LOGOUT: 'user/logout',
  SET_USER: 'user/setUser',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',

  REDIRECT_TO_ROUTE: 'redirect/redirectToRoute',
};

const setCityName = (cityName) => ({
  type: ActionType.SET_CITY_NAME,
  payload: cityName,
});

const setSortType = (sortType) => ({
  type: ActionType.SET_SORT_TYPE,
  payload: sortType,
});

const setInitOffers = (initOffers) => ({
  type: ActionType.SET_INIT_OFFERS,
  payload: initOffers,
});

const setFilteredOffers = () => ({
  type: ActionType.SET_FILTERED_OFFERS,
});

const changeOffersByFavorite = (id) => ({
  type: ActionType.CHANGE_OFFERS_BY_FAVORITE,
  payload: id,
});

const setReviews = (reviews) => ({
  type: ActionType.SET_REVIEWS,
  payload: reviews,
});

const setReviewSendedStatus = (status) => ({
  type: ActionType.SET_REVIEW_SENDED_STATUS,
  payload: status,
});

const setReviewSendingStatus = (status) => ({
  type: ActionType.SET_REVIEW_SENDING_STATUS,
  payload: status,
});

const setFavorites = (favorites) => ({
  type: ActionType.SET_FAVORITES,
  payload: favorites,
});

const logout = () => ({
  type: ActionType.LOGOUT,
});

const setUser = (user) => ({
  type: ActionType.SET_USER,
  payload: user,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const ActionCreator = {
  setCityName,
  setSortType,
  setInitOffers,
  setFilteredOffers,
  changeOffersByFavorite,

  setReviews,
  setReviewSendedStatus,
  setReviewSendingStatus,
  setFavorites,

  setUser,
  logout,
  redirectToRoute,
  requireAuthorization,
};

export { ActionType, ActionCreator };
