import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { FormRatingList } from '../form-rating/form-rating-list/form-rating-list';

import { Selector } from '../../../store/selectors';
import { IReviewPost } from '../../../interfaces';
import { TID, TFormNotifyInjectedProps } from '../../../types';

interface IFormReviewsProps extends TFormNotifyInjectedProps {
  id: TID,
  postReview(ID: TID, review: IReviewPost): void,
}

const MIN_LENGTH: number = 50;
const MAX_LENGTH: number = 300;

const FormReviews: React.FC<IFormReviewsProps> = ({ postReview, id, showNotify, renderFormNotify }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const formRef = useRef<HTMLFormElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const FormNotify = renderFormNotify();

  const sendedStatus: boolean = useSelector((state) => Selector.getReviewSendedStatus(state));
  const sendingStatus: boolean = useSelector((state) => Selector.getReviewSendingStatus(state));
  const isCommentValidity: boolean = (comment.length >= MIN_LENGTH && comment.length <= MAX_LENGTH);

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setRating(evt.currentTarget.value);
  };

  const handleTextareaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(evt.currentTarget.value);
  };

  const handleFormSubmitMouseOver = (): void => {
    if (!isCommentValidity) {
      showNotify();
    }
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();

    if (isCommentValidity) {
      postReview(id, {
        comment,
        rating,
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
        blockClassName="reviews"
        sendingStatus={sendingStatus}
        handleRatingChange={handleRatingChange}
      />

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={50}
        maxLength={300}
        value={comment}
        ref={commentRef}
        disabled={sendingStatus}
        onChange={handleTextareaChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
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
};

export { FormReviews };
