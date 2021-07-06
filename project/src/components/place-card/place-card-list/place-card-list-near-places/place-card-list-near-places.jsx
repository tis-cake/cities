import React from 'react';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { propTypesOffersARR } from '../../../../types';

const { PlaceCardNearPlaces } = PlaceCardItem;

function PlaceCardListNearPlaces({ offers }) {
  return (
    <React.Fragment>
      {offers.map((place) => (
        <PlaceCardNearPlaces
          key={place.id}
          placeData={place}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardListNearPlaces.propTypes = {
  offers: propTypesOffersARR,
};

export { PlaceCardListNearPlaces };
