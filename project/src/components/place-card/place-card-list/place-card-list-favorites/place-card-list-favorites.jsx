import React from 'react';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { propTypesOffersARR } from '../../../../types';

const { PlaceCardFavorites } = PlaceCardItem;

function PlaceCardListFavorites({ offers }) {
  return (
    <React.Fragment>
      {offers.map((place) => (
        <PlaceCardFavorites
          key={place.id}
          placeData={place}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardListFavorites.propTypes = {
  offers: propTypesOffersARR,
};

export { PlaceCardListFavorites };
