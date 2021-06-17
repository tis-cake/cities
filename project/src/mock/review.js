import { nanoid } from 'nanoid';

import {
  HOTEL_DESCRIPTIONS,
  HOTEL_HOST_NAMES,
  HOTEL_HOST_AVATARS
} from './consts';

import {
  getRandomIntInclusive,
  getRandomArrayItem,
  getRandomBooleanValue,
  generateRandomDate
} from './utils';

const getReviewMock = () => ({
  'comment': getRandomArrayItem(HOTEL_DESCRIPTIONS),
  'date': generateRandomDate(),
  'id': nanoid(),
  'rating': `${getRandomIntInclusive(0, 9)}.${getRandomIntInclusive(0, 9)}`,
  'user': {
    'avatarUrl': getRandomArrayItem(HOTEL_HOST_AVATARS),
    'id': nanoid(),
    'isPro': getRandomBooleanValue(),
    'name': getRandomArrayItem(HOTEL_HOST_NAMES),
  },
});

export { getReviewMock };
