import React from 'react';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { IPlaceCardListСitiesProps } from '../../interfaces';

const { PlaceCardСities } = PlaceCardItem;

const PlaceCardListСities: React.FC<IPlaceCardListСitiesProps> = ({ offers, setActiveOffer }) => {
  return (
    <>
      {offers.map((place) => (
        <PlaceCardСities
          key={place.id}
          placeData={place}
          setActiveOffer={setActiveOffer}
        />
      ))}
    </>
  );
};

export { PlaceCardListСities };
