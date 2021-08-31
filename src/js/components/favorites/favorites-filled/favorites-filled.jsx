import React from 'react';
import PropTypes from 'prop-types';

import { FavoritesList } from '../favorites-list/favorites-list';

import { propTypesOffersARR } from '../../../types';

function FavoritesFilled({ favorites, cityName, setCityName }) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <FavoritesList
        favorites={favorites}
        cityName={cityName}
        setCityName={setCityName}
      />
    </section>
  );
}

FavoritesFilled.propTypes = {
  favorites: propTypesOffersARR,
  cityName: PropTypes.string.isRequired,
  setCityName: PropTypes.func.isRequired,
};

export { FavoritesFilled };
