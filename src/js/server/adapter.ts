import { TOffersByID } from '../types';
import { IOffer, IReview, IUser } from '../interfaces';

// type IMapObjID<T> = {
//   [key: TID]: T,
// };

// const mapObjID = <T>(items: T[]): IMapObjID<T> => {
const mapOffersByID = (offers: IOffer[]): TOffersByID => {
  const result = {};

  for (const offer of offers) {
    result[offer.id] = offer;
  }

  return result;
};

const adaptOfferToClient = (offer): IOffer => ({
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

const adaptOffersToClient = (offers): IOffer[] => offers.map(adaptOfferToClient);

const adaptReviewToClient = (review): IReview => ({
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

const adaptReviewsToClient = (reviews): IReview[] => reviews.map(adaptReviewToClient);

const adaptUserToClient = (user): IUser => ({
  id: user.id,
  email: user.email,
  name: user.name,
  avatarUrl: user.avatar_url,
  isPro: user.is_pro,
});

export {
  mapOffersByID,
  adaptOffersToClient,
  adaptOfferToClient,
  adaptReviewsToClient,
  adaptUserToClient,
};
