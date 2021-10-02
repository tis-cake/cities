import { TDefaultRootState, NameSpace } from '../root-reducer';
import { IReview } from '../../../interfaces';

const getReviews = (state: TDefaultRootState): [] | IReview[] => state[NameSpace.REVIEWS].reviews;
const getReviewSendedStatus = (state: TDefaultRootState): boolean => state[NameSpace.REVIEWS].isDataSended;
const getReviewSendingStatus = (state: TDefaultRootState): boolean => state[NameSpace.REVIEWS].isDataSending;

const SelectorReviews = {
  getReviews,
  getReviewSendedStatus,
  getReviewSendingStatus,
};

export { SelectorReviews };
