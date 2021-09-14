import React from 'react';

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

import { IPropertyProps } from './property-interfaces';

const { BookmarkButtonBig } = BookmarkButton;

const Property: React.FC<IPropertyProps> = (props) => {
  const {
    cityName,
    offers,
    offer,
    id,
    handleFavoriteClick,
  } = props;

  const {
    title,
    isPremium,
    isFavorite,
    goods: { length: goodsCount },
  } = offer;

  const mapOffers = offers.slice();
  mapOffers.push(offer);

  const renderPropertyInsides: JSX.Element = (goodsCount > 0) && <PropertyInsides placeData={offer} />;

  return (
    <section className="property">
      <PropertyGallery placeData={offer} />

      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && <PropertyMark />}

          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
          </div>

          <BookmarkButtonBig
            id={id}
            isFavorite={isFavorite}
            blockClassName="property"
            extraHandlerFavoriteClick={handleFavoriteClick}
          />

          <PropertyRating placeData={offer} />
          <PropertyFeatures placeData={offer} />
          <PropertyPrice placeData={offer} />

          {renderPropertyInsides}

          <PropertyHost placeData={offer} />

          <section className="property__reviews reviews">
            <Reviews id={id} />
          </section>
        </div>
      </div>
      <section className="property__map map">
        <Map
          offers={mapOffers}
          cityName={cityName}
          activeOffer={offer}
        />
      </section>
    </section>
  );
};

export { Property };
