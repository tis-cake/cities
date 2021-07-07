import React from 'react';

import { ReviewsItem } from '../reviews-item/reviews-item';

import { sortDateNewToOld } from '../../../utils/sort';
import { propTypesReviews } from '../../../types';

const MAX_REVIEWS_COUNT = 10;

function ReviewsList(props) {
  const { reviewsList } = props;

  const slicedReviews = (reviewsList.length > MAX_REVIEWS_COUNT)
    ? reviewsList.slice(0, MAX_REVIEWS_COUNT)
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
}

ReviewsList.propTypes = {
  reviewsList: propTypesReviews,
};

export { ReviewsList };
