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

const getChangedOffersByFavorite = (offers, id) => {
  const currentSattus = offers[id].isFavorite;
  offers[id].isFavorite = !currentSattus;

  return offers;
};

const getFilteredOffersByID = (offers, offersIDs) => offersIDs.map((id) => offers[id]);

const getSortedOffersID = (filteredOffers, cityNameCurrent, sortTypeCurrent) => {
  const arraySorted = SortTypeAction[sortTypeCurrent](filteredOffers);
  const result = arraySorted.map((el) => el.id);

  return result;
};

export {
  prepareInitialDataStructure,
  getChangedOffersByFavorite,
  getFilteredOffersByID,
  getSortedOffersID
};
