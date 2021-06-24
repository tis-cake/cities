const prepareInitialData = (offers) => {
  // eslint-disable-next-line no-console
  console.log('%c INIT', 'color: white; background: #212529; font-size: 32px');

  const favoritesOffers = {};
  const idOnCitiesOffers = {};

  for (const offer of Object.values(offers)) {
    if (offer.isFavorite) {
      favoritesOffers[offer.id] = offer;
    }

    if (idOnCitiesOffers[offer.city.name]) {
      idOnCitiesOffers[offer.city.name].push(offer.id);
    } else {
      idOnCitiesOffers[offer.city.name] = [offer.id];
    }
  }

  return {
    favoritesOffers: favoritesOffers,
    ID_OFFERS_ON_CITIES: idOnCitiesOffers,
  };
};

const getFilteredOffers = (offers, filteredOffersIDs) => {
  const result = filteredOffersIDs.map((id) => offers[id]);
  return result;
};

export {
  prepareInitialData,
  getFilteredOffers
};
