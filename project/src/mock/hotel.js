import { nanoid } from 'nanoid';

import {
  HOTEL_CITIES,
  HOTEL_HOST_NAMES,
  HOTEL_HOST_AVATARS,
  HOTEL_IMAGES,
  HOTEL_IMAGES_PREVIEW,
  HOTEL_TYPES,
  HOTEL_GOODS,
  HOTEL_TITLES,
  HOTEL_DESCRIPTIONS
} from './consts';

import {
  getRandomIntInclusive,
  getRandomArrayItem,
  getRandomArrayItemRandomQuantity,
  getRandomBooleanValue
} from './utils';

const getHotelMock = () => ({
  'bedrooms': getRandomIntInclusive(1, 6),
  'city': {
    'location': {
      'latitude': `${getRandomIntInclusive(0, 60)}.${getRandomIntInclusive(10000, 99990)}`,
      'longitude': `${getRandomIntInclusive(0, 60)}.${getRandomIntInclusive(10000, 99990)}`,
      'zoom': getRandomIntInclusive(8, 13),
    },
    'name': getRandomArrayItem(HOTEL_CITIES),
  },
  'description': getRandomArrayItem(HOTEL_DESCRIPTIONS),
  'goods': getRandomArrayItemRandomQuantity(HOTEL_GOODS),
  'host': {
    'avatarUrl': getRandomArrayItem(HOTEL_HOST_AVATARS),
    'id': nanoid(),
    'isPro': getRandomBooleanValue(),
    'name': getRandomArrayItem(HOTEL_HOST_NAMES),
  },
  'id': nanoid(),
  'images': getRandomArrayItemRandomQuantity(HOTEL_IMAGES),
  'isFavorite': getRandomBooleanValue(),
  'isPremium': getRandomBooleanValue(),
  'location': {
    'latitude': `${getRandomIntInclusive(0, 60)}.${getRandomIntInclusive(10000, 99990)}`,
    'longitude': `${getRandomIntInclusive(0, 60)}.${getRandomIntInclusive(10000, 99990)}`,
    'zoom': getRandomIntInclusive(8, 13),
  },
  'maxAdults': getRandomIntInclusive(1, 10),
  'previewImage': getRandomArrayItem(HOTEL_IMAGES_PREVIEW),
  'price': getRandomIntInclusive(80, 200),
  'rating': `${getRandomIntInclusive(0, 9)}.${getRandomIntInclusive(0, 9)}`,
  'title': getRandomArrayItem(HOTEL_TITLES),
  'type': getRandomArrayItem(HOTEL_TYPES),
});

export { getHotelMock };
