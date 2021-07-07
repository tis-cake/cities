import { SortType } from '../const';

const sortOffers = (offers, sortBy) => {
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

    case SortType.DATE_NEW_TO_OLD: {
      return slicedOffers.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    default: {
      return slicedOffers;
    }
  }
};

const sortDateNewToOld = (elements) => elements.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

export { sortOffers, sortDateNewToOld };
