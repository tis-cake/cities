import { SortType, SortTypeAction, Cities } from '../const';

const prepareInitialDataStructure = (offers) => {
  const idOffersOnCitiesSortedType = {};

  for (const city of Object.values(Cities)) {
    idOffersOnCitiesSortedType[city] = {};

    for (const type of Object.values(SortType)) {
      idOffersOnCitiesSortedType[city][type] = [];
    }
  }

  for (const offer of Object.values(offers)) {
    idOffersOnCitiesSortedType[offer.city.name][SortType.DEFAULT].push(offer.id);
  }

  return {
    offersOnCitiesID: idOffersOnCitiesSortedType,
  };
};

const getFilteredOffersByFavorite = (filteredOffers, id) => {
  const index = filteredOffers.findIndex((offer) => offer.id === id);
  const changedOffer = filteredOffers[index];
  const currentStatus = changedOffer.isFavorite;
  changedOffer.isFavorite = !currentStatus;

  return [...filteredOffers];
};

const getFilteredOffersByID = (offers, offersIDs) => offersIDs.map((id) => offers[id]);

const getSortedOffersID = (filteredOffers, cityNameCurrent, sortTypeCurrent) => {
  const arraySorted = SortTypeAction[sortTypeCurrent](filteredOffers);
  const result = arraySorted.map((el) => el.id);

  return result;
};

export {
  prepareInitialDataStructure,

  getFilteredOffersByFavorite,
  getFilteredOffersByID,
  getSortedOffersID
};
