import React from 'react';

import { IFormRatingItemProps } from '../interfaces';

const FormRatingItem: React.FC<IFormRatingItemProps> = (props) => {
  const {
    title,
    rating,
    indexReverse,
    sendingStatus,
    blockClassName,
    handleRatingChange,
  } = props;

  const isChecked = (Number(rating) === indexReverse);

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        id={`${indexReverse}-stars`}
        value={indexReverse}
        checked={isChecked}
        name="rating"
        type="radio"
        required
        onChange={handleRatingChange}
        disabled={sendingStatus}
      />
      <label
        className={`${blockClassName}__rating-label form__rating-label`}
        htmlFor={`${indexReverse}-stars`}
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
};

export { FormRatingItem };
