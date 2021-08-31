import PropTypes from 'prop-types';

const propTypesID = PropTypes.oneOfType([
  PropTypes.string.isRequired,
  PropTypes.number.isRequired,
]);

const propTypesPlaceCard = {
  id: propTypesID,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
};

const propTypesPerson = {
  id: propTypesID,
  avatarUrl: PropTypes.string.isRequired,
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
  id: propTypesID,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
};

const propTypesNotify = {
  showNotify: PropTypes.func.isRequired,
  renderFormNotify: PropTypes.func.isRequired,
};

const propTypesReview = {
  id: propTypesID,
  comment: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    ...propTypesPerson,
  }),
};

const propTypesReviews = PropTypes.arrayOf(
  PropTypes.shape(propTypesReview),
);

const propTypesOffersOBJ = PropTypes.shape({
  offer: PropTypes.shape(propTypesOffer),
});

const propTypesOffersARR = PropTypes.arrayOf(
  PropTypes.shape(propTypesOffer),
);


export {
  propTypesPlaceCard,
  propTypesOffer,
  propTypesCity,
  propTypesUser,
  propTypesID,

  propTypesNotify,
  propTypesReview,
  propTypesReviews,
  propTypesOffersOBJ,
  propTypesOffersARR
};
