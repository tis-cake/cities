import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReviewsList } from './reviews-list/reviews-list';
import { FormReviews } from '../forms/form-reviews/form-reviews';

import { Selector } from '../../store/selectors';
import { ActionServer } from '../../server/actions';
import { AuthorizationStatus } from '../../const';
import { IReview, IReviewPost } from '../../interfaces';
import { IReviewsProps } from './interfaces';

import { withFormNotify } from '../../hocs/with-form-notify/with-form-notify';

const FormReviewsWrapped = withFormNotify(FormReviews);

const Reviews: React.FC<IReviewsProps> = ({ id }) => {
  const dispatch = useDispatch();

  const authorizationStatus: string = useSelector((state) => Selector.getAuthorizationStatus(state));
  const reviews: IReview[] = useSelector((state) => Selector.getReviews(state));
  const reviewsCount: number = reviews.length;

  const fetchReviews = (ID: string) => dispatch(ActionServer.fetchReviews(ID));
  const postReview = (ID: string, review: IReviewPost) => dispatch(ActionServer.postReview(ID, review));

  useEffect(() => {
    fetchReviews(id);
  }, [id]);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>

      {(reviewsCount > 0) && <ReviewsList reviewsList={reviews} />}

      {(authorizationStatus === AuthorizationStatus.AUTH) && <FormReviewsWrapped postReview={postReview} id={id} />}
    </>
  );
};

export { Reviews };
