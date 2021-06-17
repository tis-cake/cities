import { getHotelMock } from './hotel';
import { generateMocks } from './utils';

const DATA_HOTELS = generateMocks(10, getHotelMock);

const userData = {
  isAuthorized: true,
  email: 'giorno@yare-yare.daze',
};

export { DATA_HOTELS, userData };
