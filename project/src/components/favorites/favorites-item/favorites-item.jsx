import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { AppRoute } from '../../../const';
import { propTypesOffer } from '../../../types';

const { PlaceCardListFavorites } = PlaceCardList;

function FavoritesItem(props) {
  const { offers, cityCurrent, city, setCityName } = props;

  function handleLocationLinkClick() {
    if (city !== cityCurrent) {
      setCityName(city);
    }
  }

  const locationsCurrentClass = (city === cityCurrent)
    ? 'locations--current'
    : '';

  return (
    <li className="favorites__locations-items">
      <div className={`favorites__locations locations ${locationsCurrentClass}`}>
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.ROOT}
            onClick={() => handleLocationLinkClick()}
          >
            <span>{city}</span>
          </Link>
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
  setCityName: PropTypes.func.isRequired,
};

export { FavoritesItem };
