import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Rating } from '../../../shared/rating/rating';
import { BookmarkButton } from '../../../shared/bookmark-button/bookmark-button';

import { AppRoute } from '../../../../const';
import { propTypesPlaceCard } from '../../../../types';

const { BookmarkButtonNormal } = BookmarkButton;

function PlaceCardInfo({ placeData }) {
  const {
    id,
    title,
    type,
    price,
    rating,
    isFavorite,
  } = placeData;

  return (
    <React.Fragment>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

        <BookmarkButtonNormal
          id={id}
          isFavorite={isFavorite}
          blockClassName={'place-card'}
        />
      </div>

      <Rating
        rating={rating}
        blockClassName={'place-card'}
      />

      <h2 className="place-card__name">
        <Link to={`${AppRoute.DETAIL_OFFER}/${id}`}>
          {title}
        </Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </React.Fragment>
  );
}

PlaceCardInfo.propTypes = {
  placeData: PropTypes.shape(propTypesPlaceCard),
};

export { PlaceCardInfo };
