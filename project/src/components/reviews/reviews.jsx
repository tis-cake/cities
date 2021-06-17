import React from 'react';
import PropTypes from 'prop-types';

import { ReviewsList } from './reviews-list/reviews-list';
import { FormReviews } from '../forms/form-reviews/form-reviews';

import { propTypesReview } from '../../types';

function Reviews({ reviewsList }) {
  const { length } = reviewsList;

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{length}</span></h2>

      {(length > 0) && <ReviewsList reviewsList={reviewsList}/>}

      <FormReviews />
    </React.Fragment>
  );
}

Reviews.propTypes = {
  reviewsList: PropTypes.arrayOf(
    PropTypes.shape(propTypesReview),
  ),
};

export { Reviews };
