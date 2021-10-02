import { IReview } from '../../../interfaces';

type TReviewsReducer = {
  reviews: [] | IReview[]
  isDataSended: boolean,
  isDataSending: boolean,
};

export { TReviewsReducer };
