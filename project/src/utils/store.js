const getFilteredOffersIdOnCities = (offers) => {
  const result = {};

  for (const offer of Object.values(offers)) {
    if (result[offer.city.name]) {
      result[offer.city.name].push(offer.id);
    } else {
      result[offer.city.name] = [offer.id];
    }
  }

  return result;
};

const getFilteredOffers = (offers, filteredOffersIDs) => {
  const result = filteredOffersIDs.map((id) => offers[id]);
  return result;
};

export {
  getFilteredOffersIdOnCities,
  getFilteredOffers
};
