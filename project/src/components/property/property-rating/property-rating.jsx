import React from 'react';
import PropTypes from 'prop-types';

import { Rating } from '../../shared/rating/rating';

import { propTypesOffer } from '../../../types';

function PropertyRating({ placeData }) {
  const { rating } = placeData;

  return (
    <Rating rating={rating} blockClassName={'property'}>
      <span className="property__rating-value rating__value">{rating}</span>
    </Rating>
  );
}

PropertyRating.propTypes = {
  placeData: PropTypes.shape(propTypesOffer),
};

export { PropertyRating };
