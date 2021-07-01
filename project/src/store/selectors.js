// MAIN
const getCityName = (state) => state.cityName;
const getSortType = (state) => state.sortType;

// OFFERS
const getFavoritesOffers = (state) => state.favoritesOffers;
const getFilteredOffers = (state) => state.filteredOffers;

// REVIEWS
const getReviews = (state) => state.reviews;

// USER
const getAuthorizationStatus = (state) => state.authorizationStatus;
const getDataLoadedStatus = (state) => state.isDataLoaded;
const getUser = (state) => state.user;

const Selector = {
  getCityName,
  getSortType,

  getFavoritesOffers,
  getFilteredOffers,

  getReviews,

  getAuthorizationStatus,
  getDataLoadedStatus,
  getUser,
};

export { Selector };
