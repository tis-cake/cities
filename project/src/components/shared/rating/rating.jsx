import React from 'react';
import PropTypes from 'prop-types';

import { formatRating } from '../../../utils/format';

function Rating(props) {
  const { rating, blockClassName } = props;

  return (
    <div className={`${blockClassName}__rating rating`}>
      <div className={`${blockClassName}__stars rating__stars`}>
        <span style={{width: formatRating(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>

      {props.children}
    </div>
  );
}

Rating.propTypes = {
  children: PropTypes.element,

  rating: PropTypes.string.isRequired,
  blockClassName: PropTypes.string.isRequired,
};

export { Rating };
