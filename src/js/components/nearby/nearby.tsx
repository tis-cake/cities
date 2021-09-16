import React from 'react';

import { NearbyFilled } from './nearby-filled/nearby-filled';

import { INearbyComponentsProps } from './interfaces';

const Nearby: React.FC<INearbyComponentsProps> = ({ offers }) => {
  return (
    (offers.length > 0) && <NearbyFilled offers={offers} />
  );
};

export { Nearby };
