import React from 'react';
import PropTypes from 'prop-types';

import { CitiesFilled } from './cities-filled/cities-filled';
import { CitiesEmpty } from './cities-empty/cities-empty';

import { propTypesFilteredOffers } from '../../types';

function Cities(props) {
  const {
    cityName,
    offers: {
      length: offersCount,
    },
  } = props;


  return (
    <div className="cities">
      {(offersCount > 0) ? <CitiesFilled {...props}/> : <CitiesEmpty cityName={cityName}/>}
    </div>
  );
}

Cities.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: propTypesFilteredOffers,
};

export { Cities };
