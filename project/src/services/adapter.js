import { nanoid } from 'nanoid';

const mapObjID = (items) => {
  const result = {};

  for (const item of items) {
    result[item.id] = item;
  }

  return result;
};

const adaptOfferToClient = (offer) => {
  const adaptedOffer = {
    ...offer,
    id: nanoid(),
    host: {
      ...offer.host,
      avatarUrl: offer.host.avatar_url,
    },
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    maxAdults: offer.max_adults,
    previewImage: offer.preview_image,
  };

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

const adaptOffersToClient = (offers) => {
  const adaptedOffers = offers.map(adaptOfferToClient);
  return mapObjID(adaptedOffers);
};

export { adaptOfferToClient, adaptOffersToClient };
