const mapObjID = (items) => {
  const result = {};

  for (const item of items) {
    result[item.id] = item;
  }

  return result;
};

const adaptOfferToClient = (offer) => ({
  bedrooms: offer.bedrooms,
  city: {
    location: {
      latitude: offer.city.location.latitude,
      longitude: offer.city.location.longitude,
      zoom: offer.city.location.zoom,
    },
    name: offer.city.name,
  },
  description: offer.description,
  goods: offer.goods,
  host: {
    avatarUrl: offer.host.avatar_url,
    id: offer.host.id,
    isPro: offer.host.is_pro,
    name: offer.host.name,
  },
  id: offer.id,
  images: offer.images,
  isFavorite: offer.is_favorite,
  isPremium: offer.is_premium,
  location: {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    zoom: offer.location.zoom,
  },
  maxAdults: offer.max_adults,
  previewImage: offer.preview_image,
  price: offer.price,
  rating: offer.rating,
  title: offer.title,
  type: offer.type,
});

const adaptOffersToClient = (offers) => offers.map(adaptOfferToClient);

const adaptReviewToClient = (review) => ({
  comment: review.comment,
  date: new Date(review.date),
  id: review.id,
  rating: review.rating,
  user: {
    id: review.user.id,
    name: review.user.name,
    avatarUrl: review.user.avatar_url,
    isPro: review.user.is_pro,
  },
});

const adaptReviewsToClient = (reviews) => reviews.map(adaptReviewToClient);

const adaptUserToClient = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name,
  avatarUrl: user.avatar_url,
  isPro: user.is_pro,
});

export {
  mapObjID,
  adaptOffersToClient,
  adaptOfferToClient,
  adaptReviewsToClient,
  adaptUserToClient
};
