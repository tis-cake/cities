import { getHotelMock } from './hotel';
import { generateMocks } from './utils';

const DATA_HOTELS = generateMocks(5, getHotelMock);

const DataUser = {
  isAuthorized: true,
  email: 'giorno@yare-yare.daze',
};

export { DATA_HOTELS, DataUser };
