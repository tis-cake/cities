import React from 'react';

import { ReviewsItem } from '../reviews-item/reviews-item';

import { propTypesReviews } from '../../../types';

function ReviewsList(props) {
  const { reviewsList } = props;

  return (
    <ul className="reviews__list">
      {reviewsList.map((review) => (
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
