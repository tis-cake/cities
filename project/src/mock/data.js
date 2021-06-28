import { mapObjID } from './consts';
import { getHotelMock } from './hotel';
import { getReviewMock } from './review';
import { generateMocks } from './utils';

const DATA_HOTELS = mapObjID(generateMocks(20, getHotelMock));
const DATA_REVIEWS = generateMocks(5, getReviewMock);

export {
  DATA_HOTELS,
  DATA_REVIEWS
};
