import { SortType, SortTypeAction, Cities } from '../const';

const prepareInitialDataStructure = (offers) => {
  const favoritesOffers = {};
  const idOffersOnCitiesSortedType = {};

  for (const city of Object.values(Cities)) {
    idOffersOnCitiesSortedType[city] = {};

    for (const type of Object.values(SortType)) {
      idOffersOnCitiesSortedType[city][type] = [];
    }
  }

  for (const offer of Object.values(offers)) {
    if (offer.isFavorite) {
      favoritesOffers[offer.id] = offer;
    }

    idOffersOnCitiesSortedType[offer.city.name][SortType.DEFAULT].push(offer.id);
  }

  return {
    favoritesOffers: favoritesOffers,
    offersOnCitiesID: idOffersOnCitiesSortedType,
  };
};

const getFilteredOffersByID = (offers, offersIDs) => offersIDs.map((id) => offers[id]);

const getSortedOffersID = (filteredOffers, cityNameCurrent, sortTypeCurrent) => {
  const arraySorted = SortTypeAction[sortTypeCurrent](filteredOffers);
  const result = arraySorted.map((el) => el.id);

  return result;
};

export {
  prepareInitialDataStructure,
  getFilteredOffersByID,
  getSortedOffersID
};
