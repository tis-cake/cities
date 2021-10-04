import { sortOffers } from './sort';
import { SortType, Cities } from '../const';
import { IOffer } from '../interfaces';
import { TID, TOffersByID, TOffersByCitiesID } from '../types';

const prepareInitialDataStructure = (offers: IOffer[]): TOffersByCitiesID => {
  const idOffersByCitiesSortedType = {};

  for (const city of Object.values(Cities)) {
    idOffersByCitiesSortedType[city] = {};

    for (const type of Object.values(SortType)) {
      idOffersByCitiesSortedType[city][type] = [];
    }
  }

  for (const offer of Object.values(offers)) {
    idOffersByCitiesSortedType[offer.city.name][SortType.DEFAULT].push(offer.id);
  }

  // @ts-ignore
  return idOffersByCitiesSortedType;
};

const getFilteredOffersByFavorite = (filteredOffers: IOffer[], id: TID): IOffer[] => {
  const copiedOffers = [...filteredOffers];
  const index = copiedOffers.findIndex((offer) => String(offer.id) === String(id));
  const changedOffer = copiedOffers[index];
  const currentStatus = changedOffer.isFavorite;
  changedOffer.isFavorite = !currentStatus;

  return copiedOffers;
};

const getFilteredOffersByID = (offers: TOffersByID, offersIDs: number[]): IOffer[] => offersIDs.map((id) => offers[id]);

const getSortedOffersID = (filteredOffers: IOffer[], sortTypeCurrent: string): number[] => {
  const arraySorted = sortOffers(filteredOffers, sortTypeCurrent);
  const result = arraySorted.map((el) => el.id);

  return result;
};

export {
  prepareInitialDataStructure,

  getFilteredOffersByFavorite,
  getFilteredOffersByID,
  getSortedOffersID,
};
