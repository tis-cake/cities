import { getHotelMock } from './hotel';
import { generateMocks } from './utils';

const DATA_HOTELS = generateMocks(5, getHotelMock);

export { DATA_HOTELS };
