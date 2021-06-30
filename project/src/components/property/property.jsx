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

const { BookmarkButtonBig } = BookmarkButton;

function Property({ cityName, offers, offer, id }) {
  const {
    title,
    isPremium,
    isFavorite,
    goods: {
      length: goodsCount,
    },
  } = offer;

  const renderPropertyInsides = (goodsCount > 0) && <PropertyInsides placeData={offer}/>;

  return (
    <section className="property">
      <PropertyGallery placeData={offer}/>

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

          <PropertyRating placeData={offer}/>
          <PropertyFeatures placeData={offer}/>
          <PropertyPrice placeData={offer}/>

          {renderPropertyInsides}

          <PropertyHost placeData={offer}/>

          <section className="property__reviews reviews">
            <Reviews id={id}/>
          </section>
        </div>
      </div>
      <section className="property__map map">
        <Map
          offers={offers}
          cityName={cityName}
        />
      </section>
    </section>
  );
}

Property.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: propTypesFilteredOffers,
  offer: PropTypes.shape(propTypesOffer),
  id: PropTypes.string.isRequired,
};

export { Property };
