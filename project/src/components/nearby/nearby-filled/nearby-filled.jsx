import React from 'react';

import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { propTypesFilteredOffers } from '../../../types';

const { PlaceCardListNearPlaces } = PlaceCardList;

function NearbyFilled({ offers }) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <PlaceCardListNearPlaces offers={offers}/>
      </div>
    </section>
  );
}

NearbyFilled.propTypes = {
  offers: propTypesFilteredOffers,
};

export { NearbyFilled };
