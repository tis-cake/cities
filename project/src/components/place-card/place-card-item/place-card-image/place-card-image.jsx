import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../../const';
import { propTypesPlaceCard } from '../../../../types';

function PlaceCardImageNormal({ placeData }) {
  const { id, previewImage } = placeData;

  return (
    <Link to={`${AppRoute.ROOM_DETAIL}/${id}`}>
      <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
    </Link>
  );
}

function PlaceCardImageSmall({ placeData }) {
  const { id, previewImage } = placeData;

  return (
    <Link to={`${AppRoute.ROOM_DETAIL}/${id}`}>
      <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
    </Link>
  );
}

PlaceCardImageNormal.propTypes = {
  placeData: PropTypes.shape(propTypesPlaceCard),
};

PlaceCardImageSmall.propTypes = {
  placeData: PropTypes.shape(propTypesPlaceCard),
};

const PlaceCardImage = { PlaceCardImageNormal, PlaceCardImageSmall };

export { PlaceCardImage };
