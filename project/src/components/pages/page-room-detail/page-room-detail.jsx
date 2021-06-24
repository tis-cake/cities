import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Header } from '../../shared/header/header';
import { Property } from '../../property/property';
import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { propTypesOffers, propTypesFilteredOffers } from '../../../types';

const { PlaceCardListNearPlaces } = PlaceCardList;

function PageRoomDetailBase(props) {
  const { cityName, offers, filteredOffers } = props;

  const { id } = useParams();
  const currentPlaceData = offers[id];

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <Property
          cityName={cityName}
          filteredOffers={filteredOffers}
          currentPlaceData={currentPlaceData}
        />

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardListNearPlaces offers={filteredOffers}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  offers: state.offers,
  filteredOffers: state.filteredOffers,
});

const PageRoomDetail = connect(mapStateToProps)(PageRoomDetailBase);

PageRoomDetailBase.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: propTypesOffers,
  filteredOffers: propTypesFilteredOffers,
};

export { PageRoomDetailBase, PageRoomDetail };
