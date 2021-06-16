import React from 'react';
import PropTypes from 'prop-types';

import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { propTypesHotel } from '../../../types';

const { PlaceCardListFavorites } = PlaceCardList;

function FavoritesItem(props) {
  const { placesList, nameCity, currentCity } = props;

  const locationsCurrentClass = (nameCity === currentCity)
    ? 'locations--current'
    : '';

  return (
    <li className="favorites__locations-items">
      <div className={`favorites__locations locations ${locationsCurrentClass}`}>
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{nameCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceCardListFavorites placesList={placesList}/>
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
  nameCity: PropTypes.string.isRequired,
  currentCity: PropTypes.string.isRequired,
};

export { FavoritesItem };
