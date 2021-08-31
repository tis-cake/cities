import React from 'react';

import { NearbyFilled } from './nearby-filled/nearby-filled';

import { propTypesOffersARR } from '../../types';

function Nearby({ offers }) {
  return (
    (offers.length > 0) && <NearbyFilled offers={offers}/>
  );
}

Nearby.propTypes = {
  offers: propTypesOffersARR,
};

export { Nearby };
