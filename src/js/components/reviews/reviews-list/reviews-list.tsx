import React from 'react';

import { ReviewsItem } from '../reviews-item/reviews-item';

import { sortDateNewToOld } from '../../../utils/sort';
import { IReviewsListProps } from '../interfaces';

const MAX_REVIEWS_COUNT: number = 10;

const ReviewsList: React.FC<IReviewsListProps> = ({ reviewsList }) => {
  const slicedReviews = (reviewsList.length > MAX_REVIEWS_COUNT)
    ? reviewsList.slice(-MAX_REVIEWS_COUNT)
    : reviewsList;

  const sortedReviews = sortDateNewToOld(slicedReviews);

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review) => (
        <ReviewsItem
          key={review.id}
          reviewData={review}
        />
      ))}
    </ul>
  );
};

export { ReviewsList };
