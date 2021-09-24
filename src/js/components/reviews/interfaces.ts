import { IReview } from '../../interfaces';
import { TID } from '../../types';

interface IReviewsProps {
  id: TID,
}

interface IReviewsItemProps {
  reviewData: IReview,
}

interface IReviewsListProps {
  reviewsList: IReview[],
}

export {
  IReviewsProps,
  IReviewsItemProps,
  IReviewsListProps,
};
