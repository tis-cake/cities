import React from 'react';

import { Rating } from '../../shared/rating/rating';

import { formatDateTime, formatDateReview } from '../../../utils/format';
import { IReviewsItemProps } from '../interfaces';

const ReviewsItem: React.FC<IReviewsItemProps> = ({ reviewData }) => {
  const {
    comment,
    date,
    rating,
    user: {
      avatarUrl,
      name,
    },
  } = reviewData;

  const dateTime = formatDateTime(date);
  const dateReview = formatDateReview(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating
          rating={rating}
          blockClassName="reviews"
        />

        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTime}>{dateReview}</time>
      </div>
    </li>
  );
};

export { ReviewsItem };
