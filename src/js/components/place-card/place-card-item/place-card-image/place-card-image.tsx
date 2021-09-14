import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../../const';
import { IPlaceCardItemComponentsProps } from '../../place-card-interfaces';

const PlaceCardImageNormal: React.FC<IPlaceCardItemComponentsProps> = ({ placeData }) => {
  const { id, previewImage } = placeData;

  return (
    <Link to={`${AppRoute.DETAIL_OFFER}/${id}`}>
      <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
    </Link>
  );
};

const PlaceCardImageSmall: React.FC<IPlaceCardItemComponentsProps> = ({ placeData }) => {
  const { id, previewImage } = placeData;

  return (
    <Link to={`${AppRoute.DETAIL_OFFER}/${id}`}>
      <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
    </Link>
  );
};

const PlaceCardImage = { PlaceCardImageNormal, PlaceCardImageSmall };

export { PlaceCardImage };
