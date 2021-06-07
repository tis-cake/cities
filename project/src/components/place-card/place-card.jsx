import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../const';
import { formatRating } from '../../utils';
import { propTypesPlaceCard } from '../../types';

function PremiumMark() {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
}

function PlaceCard(props) {
  const {
    id,
    title,
    type,
    price,
    rating,
    previewImage,
    isFavorite,
    isPremium,
  } = props;

  const bookmarkButtonActiveClass = isFavorite
    ? 'place-card__bookmark-button--active'
    : '';

  return (
    <article className="cities__place-card place-card">
      {isPremium ? <PremiumMark isPremium={isPremium} /> : isPremium}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.ROOM_DETAIL}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
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
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  ...propTypesPlaceCard,
};

export { PlaceCard };
