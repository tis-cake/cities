import React from 'react';

import { Rating } from '../../shared/rating/rating';

import { IPropertyComponentsProps } from '../property-interfaces';

const PropertyRating: React.FC<IPropertyComponentsProps> = ({ placeData }) => {
  const { rating } = placeData;

  return (
    <Rating rating={rating} blockClassName="property">
      <span className="property__rating-value rating__value">{rating}</span>
    </Rating>
  );
};

export { PropertyRating };
