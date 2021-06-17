import React from 'react';
import PropTypes from 'prop-types';

import { propTypesHotel } from '../../../types';

function PropertyPrice({ placeData }) {
  const { price } = placeData;

  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
}

PropertyPrice.propTypes = {
  placeData: PropTypes.shape(propTypesHotel),
};

export { PropertyPrice };
