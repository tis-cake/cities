import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { propTypesHotel } from '../../../types';

function PropertyGallery({ placeData }) {
  const { images } = placeData;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image) => (
          <div key={nanoid()} className="property__image-wrapper">
            <img className="property__image" src={image} alt="Studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

PropertyGallery.propTypes = {
  placeData: PropTypes.shape(propTypesHotel),
};

export { PropertyGallery };
