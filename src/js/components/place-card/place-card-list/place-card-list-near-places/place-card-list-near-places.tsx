import React from 'react';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { IPlaceCardListComponentsProps } from '../../interfaces';

const { PlaceCardNearPlaces } = PlaceCardItem;

const PlaceCardListNearPlaces: React.FC<IPlaceCardListComponentsProps> = ({ offers }) => {
  return (
    <>
      {offers.map((place) => (
        <PlaceCardNearPlaces
          key={place.id}
          placeData={place}
        />
      ))}
    </>
  );
};

export { PlaceCardListNearPlaces };
