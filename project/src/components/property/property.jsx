import React from 'react';
import PropTypes from 'prop-types';

import { Map } from '../map/map';
import { Reviews } from '../reviews/reviews';
import { BookmarkButton } from '../shared/bookmark-button/bookmark-button';
import { PropertyMark } from './property-mark/property-mark';
import { PropertyHost } from './property-host/property-host';
import { PropertyPrice } from './property-price/property-price';
import { PropertyRating } from './property-rating/property-rating';
import { PropertyGallery } from './property-gallery/property-gallery';
import { PropertyInsides } from './property-insides/property-insides';
import { PropertyFeatures } from './property-features/property-features';

import { propTypesOffer, propTypesFilteredOffers } from '../../types';
import { DATA_REVIEWS } from '../../mock/data';

const { BookmarkButtonBig } = BookmarkButton;

function Property({ cityName, filteredOffers, currentPlaceData }) {
  const {
    title,
    isPremium,
    isFavorite,
    goods: {
      length: goodsCount,
    },
  } = currentPlaceData;

  const renderPropertyInsides = (goodsCount > 0) && <PropertyInsides placeData={currentPlaceData}/>;

  return (
    <section className="property">
      <PropertyGallery placeData={currentPlaceData}/>

      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && <PropertyMark />}

          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
          </div>

          <BookmarkButtonBig
            isFavorite={isFavorite}
            blockClassName={'property'}
          />

          <PropertyRating placeData={currentPlaceData}/>
          <PropertyFeatures placeData={currentPlaceData}/>
          <PropertyPrice placeData={currentPlaceData}/>

          {renderPropertyInsides}

          <PropertyHost placeData={currentPlaceData}/>

          <section className="property__reviews reviews">
            <Reviews reviewsList={DATA_REVIEWS}/>
          </section>
        </div>
      </div>
      <section className="property__map map">
        <Map
          offers={filteredOffers}
          cityName={cityName}
        />
      </section>
    </section>
  );
}

Property.propTypes = {
  cityName: PropTypes.string.isRequired,
  filteredOffers: propTypesFilteredOffers,
  currentPlaceData: PropTypes.shape(propTypesOffer),
};

export { Property };
