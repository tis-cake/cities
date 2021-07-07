import React from 'react';
import PropTypes from 'prop-types';

import { formatRating, formatRatingRound } from '../../../utils/format';

function Rating(props) {
  const { rating, blockClassName, isRound } = props;

  const formattedRating = isRound
    ? formatRatingRound(rating)
    : formatRating(rating);

  return (
    <div className={`${blockClassName}__rating rating`}>
      <div className={`${blockClassName}__stars rating__stars`}>
        <span style={{width: formattedRating}}></span>
        <span className="visually-hidden">Rating</span>
      </div>

      {props.children}
    </div>
  );
}

Rating.propTypes = {
  children: PropTypes.element,

  isRound: PropTypes.bool,
  rating: PropTypes.number.isRequired,
  blockClassName: PropTypes.string.isRequired,
};

export { Rating };
