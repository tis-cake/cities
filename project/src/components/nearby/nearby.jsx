import React from 'react';
import PropTypes from 'prop-types';

import { PlaceCardList } from '../place-card/place-card-list/place-card-list';

import { propTypesFilteredOffers } from '../../types';

const { PlaceCardListNearPlaces } = PlaceCardList;

const MAX_NEAR_PLACE = 3;

function NearbyEmpty() {
  return ('');
}

function NearbyFully({ offers }) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <PlaceCardListNearPlaces offers={offers}/>
      </div>
    </section>
  );
}

function Nearby({ offers, currentID }) {
  const filteredOffers = offers.filter((offer) => offer.id !== currentID);
  const slicedOffers = filteredOffers.slice(0, MAX_NEAR_PLACE);

  return (
    (slicedOffers.length > 0) ? <NearbyFully offers={slicedOffers}/> : <NearbyEmpty />
  );
}

NearbyFully.propTypes = {
  offers: propTypesFilteredOffers,
};

Nearby.propTypes = {
  offers: propTypesFilteredOffers,
  currentID: PropTypes.string.isRequired,
};

export { Nearby };
