import React from 'react';
import { Link } from 'react-router-dom';

import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { AppRoute } from '../../../const';
import { TSetCityName } from '../../../types';
import { IFavoritesItemProps } from '../interfaces';

const { PlaceCardListFavorites } = PlaceCardList;

const handleLocationLinkClick = (city: string, cityCurrent: string, setCityName: TSetCityName): void => {
  if (city !== cityCurrent) {
    setCityName(city);
  }
};

const FavoritesItem: React.FC<IFavoritesItemProps> = (props) => {
  const { offers, cityCurrent, city, setCityName } = props;

  const locationsCurrentClass: string = (city === cityCurrent)
    ? 'locations--current'
    : '';

  return (
    <li className="favorites__locations-items">
      <div className={`favorites__locations locations ${locationsCurrentClass}`}>
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.ROOT}
            onClick={() => handleLocationLinkClick(city, cityCurrent, setCityName)}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <PlaceCardListFavorites offers={offers} />
      </div>
    </li>
  );
};

export { FavoritesItem };
