import React from 'react';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { IPlaceCardListComponentsProps } from '../../place-card-interfaces';

const { PlaceCardFavorites } = PlaceCardItem;

const PlaceCardListFavorites: React.FC<IPlaceCardListComponentsProps> = ({ offers }) => {
  return (
    <>
      {offers.map((place) => (
        <PlaceCardFavorites
          key={place.id}
          placeData={place}
        />
      ))}
    </>
  );
};

export { PlaceCardListFavorites };
