import { sortOffers } from '../utils/sort';
import { SortType, Cities } from '../const';

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
  const copiedOffers = [...filteredOffers];
  const index = copiedOffers.findIndex((offer) => String(offer.id) === String(id));
  const changedOffer = copiedOffers[index];
  const currentStatus = changedOffer.isFavorite;
  changedOffer.isFavorite = !currentStatus;

  return copiedOffers;
};

const getFilteredOffersByID = (offers, offersIDs) => offersIDs.map((id) => offers[id]);

const getSortedOffersID = (filteredOffers, sortTypeCurrent) => {
  const arraySorted = sortOffers(filteredOffers, sortTypeCurrent);
  const result = arraySorted.map((el) => el.id);

  return result;
};

export {
  prepareInitialDataStructure,

  getFilteredOffersByFavorite,
  getFilteredOffersByID,
  getSortedOffersID
};
