import { NameSpace } from '../root-reducer';

const getReviews = (state) => state[NameSpace.REVIEWS].reviews;

const SelectorReviews = {
  getReviews,
};

export { SelectorReviews };
