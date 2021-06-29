import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ReviewsList } from './reviews-list/reviews-list';
import { FormReviews } from '../forms/form-reviews/form-reviews';

import { ActionServer } from '../../server/actions';
import { AuthorizationStatus } from '../../const';
import { propTypesReviews } from '../../types';

function ReviewsBase(props) {
  const {
    authorizationStatus,
    reviews,
    id,
    fetchReviews,
    postReview,
  } = props;

  const { length: reviewsCount } = reviews;

  useEffect(() => {
    fetchReviews(id);
  }, [id]);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>

      {(reviewsCount > 0) && <ReviewsList reviewsList={reviews}/>}

      {(authorizationStatus === AuthorizationStatus.AUTH) && <FormReviews postReview={postReview} id={id}/>}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews(id) {
    dispatch(ActionServer.fetchReviews(id));
  },
  postReview(id, review) {
    dispatch(ActionServer.postReview(id, review));
  },
});

const Reviews = connect(mapStateToProps, mapDispatchToProps)(ReviewsBase);

ReviewsBase.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reviews: propTypesReviews,
  fetchReviews: PropTypes.func.isRequired,
  postReview: PropTypes.func.isRequired,
};

export { ReviewsBase, Reviews };
