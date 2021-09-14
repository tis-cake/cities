import React from 'react';
import { nanoid } from 'nanoid';

import { IPropertyComponentsProps } from '../property-interfaces';

const PropertyInsides: React.FC<IPropertyComponentsProps> = ({ placeData }) => {
  const { goods } = placeData;

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>

      <ul className="property__inside-list">
        {goods.map((good) => (
          <li key={`property-inside-item-${nanoid()}`} className="property__inside-item">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PropertyInsides };
