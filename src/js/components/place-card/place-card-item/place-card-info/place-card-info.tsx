import React from 'react';
import { Link } from 'react-router-dom';

import { Rating } from '../../../shared/rating/rating';
import { BookmarkButton } from '../../../shared/bookmark-button/bookmark-button';

import { AppRoute } from '../../../../const';
import { IPlaceCardItemComponentsProps } from '../../interfaces';

const { BookmarkButtonNormal } = BookmarkButton;

const PlaceCardInfo: React.FC<IPlaceCardItemComponentsProps> = ({ placeData }) => {
  const {
    id,
    title,
    type,
    price,
    rating,
    isFavorite,
  } = placeData;

  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

        <BookmarkButtonNormal
          id={id}
          isFavorite={isFavorite}
          blockClassName="place-card"
        />
      </div>

      <Rating
        isRound
        rating={rating}
        blockClassName="place-card"
      />

      <h2 className="place-card__name">
        <Link to={`${AppRoute.DETAIL_OFFER}/${id}`}>
          {title}
        </Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </>
  );
};

export { PlaceCardInfo };
