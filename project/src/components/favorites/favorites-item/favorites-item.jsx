import React from 'react';
import PropTypes from 'prop-types';

import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { propTypesOffer } from '../../../types';

const { PlaceCardListFavorites } = PlaceCardList;

function FavoritesItem(props) {
  const { offers, cityCurrent, city } = props;

  const locationsCurrentClass = (city === cityCurrent)
    ? 'locations--current'
    : '';

  return (
    <li className="favorites__locations-items">
      <div className={`favorites__locations locations ${locationsCurrentClass}`}>
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceCardListFavorites offers={offers}/>
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propTypesOffer),
  ),
  cityCurrent: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export { FavoritesItem };
