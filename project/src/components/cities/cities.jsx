import React from 'react';

import { CitiesFilled } from './cities-filled/cities-filled';
import { CitiesEmpty } from './cities-empty/cities-empty';

import { propTypesFilteredOffers } from '../../types';

function Cities(props) {
  const {
    offers: {
      length: offersCount,
    },
  } = props;


  return (
    <div className="cities">
      {(offersCount > 0) ? <CitiesFilled {...props}/> : <CitiesEmpty />}
    </div>
  );
}

Cities.propTypes = {
  offers: propTypesFilteredOffers,
};

export { Cities };
