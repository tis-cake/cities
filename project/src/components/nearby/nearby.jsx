import React from 'react';

import { NearbyFilled } from './nearby-filled/nearby-filled';

import { propTypesFilteredOffers } from '../../types';

function Nearby({ offers }) {
  return (
    (offers.length > 0) && <NearbyFilled offers={offers}/>
  );
}

Nearby.propTypes = {
  offers: propTypesFilteredOffers,
};

export { Nearby };
