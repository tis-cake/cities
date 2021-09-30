import { IReview } from '../../interfaces';

interface IReviewsProps {
  id: string,
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
