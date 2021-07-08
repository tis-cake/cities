import React from 'react';
import PropTypes from 'prop-types';

function FormRatingItem(props) {
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
    <React.Fragment>
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
        disabled={sendingStatus}
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

FormRatingItem.propTypes = {
  sendingStatus: PropTypes.bool,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  indexReverse: PropTypes.number.isRequired,
  blockClassName: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
};

export { FormRatingItem };
