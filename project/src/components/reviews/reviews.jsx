import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ReviewsList } from './reviews-list/reviews-list';
import { FormReviews } from '../forms/form-reviews/form-reviews';

import { Selector } from '../../store/selectors';
import { AuthorizationStatus } from '../../const';
import { ActionServer } from '../../server/actions';

import { withFormNotify } from '../../hocs/with-form-notify/with-form-notify';

const FormReviewsWrapped = withFormNotify(FormReviews);

function Reviews({ id }) {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector((state) => Selector.getAuthorizationStatus(state));
  const reviews = useSelector((state) => Selector.getReviews(state));
  const reviewsCount = reviews.length;

  const fetchReviews = (ID) => dispatch(ActionServer.fetchReviews(ID));
  const postReview = (ID, review) => dispatch(ActionServer.postReview(ID, review));

  useEffect(() => {
    fetchReviews(id);
  }, [id]);

  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>

      {(reviewsCount > 0) && <ReviewsList reviewsList={reviews}/>}

      {(authorizationStatus === AuthorizationStatus.AUTH) && <FormReviewsWrapped postReview={postReview} id={id}/>}
    </React.Fragment>
  );
}

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export { Reviews };
