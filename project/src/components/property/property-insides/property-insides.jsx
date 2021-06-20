import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { propTypesOffer } from '../../../types';

function PropertyInsides({ placeData }) {
  const { goods } = placeData;

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>

      <ul className="property__inside-list">
        {goods.map((good) => (
          <li key={nanoid()} className="property__inside-item">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}

PropertyInsides.propTypes = {
  placeData: PropTypes.shape(propTypesOffer),
};

export { PropertyInsides };
