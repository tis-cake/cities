import { SortType } from '../const';
import { IOffer } from '../interfaces';

// function sortDateNewToOld<T>(elements: T[]): T[] {
const sortDateNewToOld = <T>(elements: T[]): T[] => {
  // @ts-ignore
  return elements.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
};

const sortOffers = (offers: IOffer[], sortBy: string) => {
  const slicedOffers = offers.slice();

  switch (sortBy) {
    case SortType.PRICE_LOW_TO_HIGH: {
      return slicedOffers.sort((a, b) => a.price - b.price);
    }

    case SortType.PRICE_HIGH_TO_LOW: {
      return slicedOffers.sort((a, b) => b.price - a.price);
    }

    case SortType.RATING_LOW_TO_HIGH: {
      return slicedOffers.sort((a, b) => a.rating - b.rating);
    }

    case SortType.RATING_HIGH_TO_LOW: {
      return slicedOffers.sort((a, b) => b.rating - a.rating);
    }

    // case SortType.DATE_NEW_TO_OLD: {
    //   return sortDateNewToOld(slicedOffers);
    // }

    default: {
      return slicedOffers;
    }
  }
};

export { sortDateNewToOld, sortOffers };
