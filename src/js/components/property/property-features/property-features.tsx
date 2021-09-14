import React from 'react';

import { castBedroomsFormat, castAdultsFormat } from '../../../utils/format';
import { IPropertyComponentsProps } from '../property-interfaces';

const PropertyFeatures: React.FC<IPropertyComponentsProps> = ({ placeData }) => {
  const { type, bedrooms, maxAdults } = placeData;

  return (
    <ul className="property__features">
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
};

export { PropertyFeatures };
