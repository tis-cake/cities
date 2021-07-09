import React from 'react';
import PropTypes from 'prop-types';

import { castBedroomsFormat, castAdultsFormat } from '../../../utils/format';
import { propTypesOffer } from '../../../types';

function PropertyFeatures({ placeData }) {
  const { type, bedrooms, maxAdults } = placeData;

  return (
    <ul className="property__features" data-testid="property-features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} {castBedroomsFormat(bedrooms)}
      </li>
      <li className="property__feature property__feature--adults">
        Max {maxAdults} {castAdultsFormat(maxAdults)}
      </li>
    </ul>
  );
}

PropertyFeatures.propTypes = {
  placeData: PropTypes.shape(propTypesOffer),
};

export { PropertyFeatures };
