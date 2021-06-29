import React from 'react';

import { ReviewsList } from './reviews-list/reviews-list';
import { FormReviews } from '../forms/form-reviews/form-reviews';

import { propTypesReviews } from '../../types';

function Reviews({ reviews }) {
  const { length: reviewsCount } = reviews;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>

      {(reviewsCount > 0) && <ReviewsList reviewsList={reviews}/>}

      <FormReviews />
    </React.Fragment>
  );
}

Reviews.propTypes = {
  reviews: propTypesReviews,
};

export { Reviews };
