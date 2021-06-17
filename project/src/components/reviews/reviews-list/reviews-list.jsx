import React from 'react';
import PropTypes from 'prop-types';

import { ReviewsItem } from '../reviews-item/reviews-item';

import { propTypesReview } from '../../../types';

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
  reviewsList: PropTypes.arrayOf(
    PropTypes.shape(propTypesReview),
  ),
};

export { ReviewsList };
