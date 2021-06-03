import { getHotelMockup } from './hotel';
import { generateMockups } from './utils';

const DATA_HOTELS = generateMockups(5, getHotelMockup);

export { DATA_HOTELS };
