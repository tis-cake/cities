// MAIN
const getCityName = (state) => state.cityName;
const getSortType = (state) => state.sortType;
const getFilteredOffers = (state) => state.filteredOffers;

// REVIEWS
const getReviews = (state) => state.reviews;

// FAVORITES
const getFavorites = (state) => state.favorites;

// USER
const getAuthorizationStatus = (state) => state.authorizationStatus;
const getDataLoadedStatus = (state) => state.isDataLoaded;
const getUser = (state) => state.user;

const Selector = {
  getCityName,
  getSortType,
  getFilteredOffers,

  getReviews,
  getFavorites,

  getAuthorizationStatus,
  getDataLoadedStatus,
  getUser,
};

export { Selector };
