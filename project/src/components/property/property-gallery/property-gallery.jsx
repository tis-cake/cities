import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { propTypesOffer } from '../../../types';

const MAX_IMAGES_COUNT = 6;

function PropertyGallery({ placeData }) {
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
}

PropertyGallery.propTypes = {
  placeData: PropTypes.shape(propTypesOffer),
};

export { PropertyGallery };
