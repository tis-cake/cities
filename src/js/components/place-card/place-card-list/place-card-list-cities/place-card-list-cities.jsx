import React from 'react';
import PropTypes from 'prop-types';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { propTypesOffersARR } from '../../../../types';

const { PlaceCardСities } = PlaceCardItem;

function PlaceCardListСities({ offers, setActiveOffer }) {
  return (
    <React.Fragment>
      {offers.map((place) => (
        <PlaceCardСities
          key={place.id}
          placeData={place}
          setActiveOffer={setActiveOffer}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardListСities.propTypes = {
  offers: propTypesOffersARR,
  setActiveOffer: PropTypes.func.isRequired,
};

export { PlaceCardListСities };
