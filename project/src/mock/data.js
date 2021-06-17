import { getHotelMock } from './hotel';
import { getReviewMock } from './review';
import { generateMocks } from './utils';

const DATA_HOTELS = generateMocks(10, getHotelMock);
const DATA_REVIEWS = generateMocks(5, getReviewMock);

const userData = {
  isAuthorized: true,
  email: 'giorno@yare-yare.daze',
};

export {
  DATA_HOTELS,
  DATA_REVIEWS,

  userData
};
