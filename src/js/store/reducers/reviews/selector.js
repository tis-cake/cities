import { NameSpace } from '../root-reducer';

const getReviews = (state) => state[NameSpace.REVIEWS].reviews;
const getReviewSendedStatus = (state) => state[NameSpace.REVIEWS].isDataSended;
const getReviewSendingStatus = (state) => state[NameSpace.REVIEWS].isDataSending;

const SelectorReviews = {
  getReviews,
  getReviewSendedStatus,
  getReviewSendingStatus,
};

export { SelectorReviews };
