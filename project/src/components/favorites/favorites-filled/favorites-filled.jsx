import React from 'react';
import PropTypes from 'prop-types';

import { FavoritesList } from '../favorites-list/favorites-list';

import { propTypesOffers } from '../../../types';

function FavoritesFilled({ offers, cityName, setCityName }) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <FavoritesList
        offers={offers}
        cityName={cityName}
        setCityName={setCityName}
      />
    </section>
  );
}

FavoritesFilled.propTypes = {
  offers: propTypesOffers,
  cityName: PropTypes.string.isRequired,
  setCityName: PropTypes.func.isRequired,
};

export { FavoritesFilled };
