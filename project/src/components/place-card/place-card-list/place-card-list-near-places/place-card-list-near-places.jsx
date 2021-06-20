import React from 'react';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { propTypesFilteredOffers } from '../../../../types';

const { PlaceCardNearPlaces } = PlaceCardItem;

function PlaceCardListNearPlaces({ offers }) {
  // временно ограничиваем до 3 элементов
  const offersSliced = offers.slice(0, 3);

  return (
    <React.Fragment>
      {offersSliced.map((place) => (
        <PlaceCardNearPlaces
          key={place.id}
          placeData={place}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardListNearPlaces.propTypes = {
  offers: propTypesFilteredOffers,
};

export { PlaceCardListNearPlaces };
