import React, { useState } from 'react';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { propTypesFilteredOffers } from '../../../../types';

const { PlaceCardСities } = PlaceCardItem;

function PlaceCardListСities({ offers }) {
  // eslint-disable-next-line no-unused-vars
  const [ activePlaceCardState, setActivePlaceCardState ] = useState({});

  function handlePlaceCardMouseActive(activePlaceCard) {
    // eslint-disable-next-line no-console
    console.log(activePlaceCard);

    setActivePlaceCardState(activePlaceCard);
  }

  return (
    <React.Fragment>
      {offers.map((place) => (
        <PlaceCardСities
          key={place.id}
          placeData={place}
          onMouseActive={handlePlaceCardMouseActive}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardListСities.propTypes = {
  offers: propTypesFilteredOffers,
};

export { PlaceCardListСities };
