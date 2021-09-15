import React from 'react';

import { IPropertyComponentsProps } from '../interfaces';

const PropertyPrice: React.FC<IPropertyComponentsProps> = ({ placeData }) => {
  const { price } = placeData;

  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
};

export { PropertyPrice };
