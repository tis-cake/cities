import React from 'react';
import { nanoid } from 'nanoid';

import { IPropertyComponentsProps } from '../interfaces';

const MAX_IMAGES_COUNT = 6;

const PropertyGallery: React.FC<IPropertyComponentsProps> = ({ placeData }) => {
  const { images } = placeData;

  const slicedImages = (images.length > MAX_IMAGES_COUNT)
    ? images.slice(0, MAX_IMAGES_COUNT)
    : images;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {slicedImages.map((image) => (
          <div key={`property-image-${nanoid()}`} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { PropertyGallery };
