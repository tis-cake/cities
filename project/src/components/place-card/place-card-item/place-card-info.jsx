import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';
import { formatRating } from '../../../utils';
import { propTypesPlaceCard } from '../../../types';

function PlaceCardInfo({ placeData }) {
  const {
    id,
    title,
    type,
    price,
    rating,
    isFavorite,
  } = placeData;

  const bookmarkButtonActiveClass = isFavorite
    ? 'place-card__bookmark-button--active'
    : '';

  return (
    <React.Fragment>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

        <button className={`place-card__bookmark-button ${bookmarkButtonActiveClass} button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: formatRating(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`${AppRoute.ROOM_DETAIL}/${id}`}>
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
