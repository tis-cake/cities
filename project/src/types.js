import PropTypes from 'prop-types';

const propTypesPlaceCard = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
};

const propTypesPerson = {
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

const propTypesLocation = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
};

const propTypesCity = {
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    ...propTypesLocation,
  }),
};

const propTypesOffer = {
  ...propTypesPlaceCard,

  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string.isRequired),
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  maxAdults: PropTypes.number.isRequired,
  city: PropTypes.shape({
    ...propTypesCity,
  }),
  host: PropTypes.shape({
    ...propTypesPerson,
  }),
  location: PropTypes.shape({
    ...propTypesLocation,
  }),
};

const propTypesUser = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
};

const propTypesReview = {
  comment: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    ...propTypesPerson,
  }),
};

const propTypesReviews = PropTypes.arrayOf(
  PropTypes.shape(propTypesReview),
);

const propTypesOffers = PropTypes.shape({
  offer: PropTypes.shape(propTypesOffer),
});

const propTypesFilteredOffers = PropTypes.arrayOf(
  PropTypes.shape(propTypesOffer),
);

export {
  propTypesPlaceCard,
  propTypesOffer,
  propTypesCity,
  propTypesUser,

  propTypesReview,
  propTypesReviews,
  propTypesOffers,
  propTypesFilteredOffers
};
