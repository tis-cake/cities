import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Header } from '../../shared/header/header';
import { Property } from '../../property/property';
import { Nearby } from '../../nearby/nearby';

import { ActionCreator } from '../../../store/actions';
import { propTypesOffers, propTypesFilteredOffers } from '../../../types';

function PageDetailOfferBase(props) {
  const {
    cityName,
    offers,
    filteredOffers,
    detailOfferActiveID,
    setDetailOfferActiveID,
  } = props;

  const { id } = useParams();

  useEffect(() => {
    setDetailOfferActiveID(id);

    window.scrollTo(0, 0);
  }, [id]);

  const currentPlaceData = (id !== detailOfferActiveID)
    ? offers[id]
    : offers[detailOfferActiveID];

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
          <Nearby
            offers={filteredOffers}
            currentID={detailOfferActiveID}
          />
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  offers: state.offers,
  filteredOffers: state.filteredOffers,
  detailOfferActiveID: state.detailOfferActiveID,
});

const mapDispatchToProps = (dispatch) => ({
  setDetailOfferActiveID(id) {
    dispatch(ActionCreator.setDetailOfferActiveID(id));
  },
});

const PageDetailOffer = connect(mapStateToProps, mapDispatchToProps)(PageDetailOfferBase);

PageDetailOfferBase.propTypes = {
  cityName: PropTypes.string.isRequired,
  offers: propTypesOffers,
  filteredOffers: propTypesFilteredOffers,
  detailOfferActiveID: PropTypes.string.isRequired,
  setDetailOfferActiveID: PropTypes.func.isRequired,
};

export { PageDetailOfferBase, PageDetailOffer };
