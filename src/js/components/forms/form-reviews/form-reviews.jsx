import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { FormRatingList } from '../form-rating/form-rating-list/form-rating-list';

import { Selector } from '../../../store/selectors';
import { propTypesNotify } from '../../../types';

const MIN_LENGTH = 50;
const MAX_LENGTH = 300;

function FormReviews({ postReview, id, showNotify, renderFormNotify }) {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const formRef = useRef(null);
  const commentRef = useRef(null);

  const FormNotify = renderFormNotify();
  const sendedStatus = useSelector((state) => Selector.getReviewSendedStatus(state));
  const sendingStatus = useSelector((state) => Selector.getReviewSendingStatus(state));

  const isCommentValidity = (comment.length >= MIN_LENGTH && comment.length <= MAX_LENGTH);

  const handleRatingChange = (evt) => {
    setRating(evt.currentTarget.value);
  };

  const handleTextareaChange = (evt) => {
    setComment(evt.currentTarget.value);
  };

  const handleFormSubmitMouseOver = () => {
    if (!isCommentValidity) {
      showNotify();
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (isCommentValidity) {
      postReview(id, {
        'comment': comment,
        'rating': rating,
      });
    }
  };

  useEffect(() => {
    if (sendedStatus) {
      setRating('');
      setComment('');
    }
  }, [sendedStatus]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
      ref={formRef}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <FormRatingList
        rating={rating}
        blockClassName={'reviews'}
        sendingStatus={sendingStatus}
        handleRatingChange={handleRatingChange}
      />

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength="50"
        maxLength="300"
        value={comment}
        ref={commentRef}
        disabled={sendingStatus}
        onChange = {handleTextareaChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isCommentValidity}
          onMouseOver={handleFormSubmitMouseOver}
        >
          Submit
        </button>
      </div>

      {FormNotify}
    </form>
  );
}

FormReviews.propTypes = {
  id: PropTypes.string.isRequired,
  postReview: PropTypes.func.isRequired,

  ...propTypesNotify,
};

export { FormReviews };
