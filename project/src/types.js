import PropTypes from 'prop-types';

const propTypesPlaceCard = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
};

const propTypesHotel = {
  ...propTypesPlaceCard,

  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string.isRequired),
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  maxAdults: PropTypes.number.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  }),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    latitude: PropTypes.string.isRequired,
    longitude: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
};

export {
  propTypesPlaceCard,
  propTypesHotel
};
