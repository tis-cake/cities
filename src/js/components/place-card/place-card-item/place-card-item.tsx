import React from 'react';

import { PlaceCardMark } from './place-card-mark/place-card-mark';
import { PlaceCardInfo } from './place-card-info/place-card-info';
import { PlaceCardImage } from './place-card-image/place-card-image';

import { IPlaceCardItemComponentsProps, IPlaceCardСitiesProps } from '../place-card-interfaces';

const { PlaceCardImageNormal, PlaceCardImageSmall } = PlaceCardImage;

const PlaceCardСities: React.FC<IPlaceCardСitiesProps> = ({ placeData, setActiveOffer }) => {
  const { isPremium } = placeData;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => setActiveOffer(placeData)}
      onMouseLeave={() => setActiveOffer({})}
    >
      {isPremium && <PlaceCardMark />}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <PlaceCardImageNormal placeData={placeData} />
      </div>
      <div className="place-card__info">
        <PlaceCardInfo placeData={placeData} />
      </div>
    </article>
  );
};

const PlaceCardNearPlaces: React.FC<IPlaceCardItemComponentsProps> = ({ placeData }) => {
  const { isPremium } = placeData;

  return (
    <article className="near-places__card place-card">
      {isPremium && <PlaceCardMark />}

      <div className="near-places__image-wrapper place-card__image-wrapper">
        <PlaceCardImageNormal placeData={placeData} />
      </div>
      <div className="place-card__info">
        <PlaceCardInfo placeData={placeData} />
      </div>
    </article>
  );
};

const PlaceCardFavorites: React.FC<IPlaceCardItemComponentsProps> = ({ placeData }) => {
  const { isPremium } = placeData;

  return (
    <article className="favorites__card place-card">
      {isPremium && <PlaceCardMark />}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <PlaceCardImageSmall placeData={placeData} />
      </div>
      <div className="favorites__card-info place-card__info">
        <PlaceCardInfo placeData={placeData} />
      </div>
    </article>
  );
};

const PlaceCardItem = {
  PlaceCardСities,
  PlaceCardNearPlaces,
  PlaceCardFavorites,
};

export { PlaceCardItem };
