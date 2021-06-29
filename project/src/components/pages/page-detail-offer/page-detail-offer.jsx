import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Nearby } from '../../nearby/nearby';
import { Header } from '../../shared/header/header';
import { Property } from '../../property/property';
import { PageLoading } from '../page-loading/page-loading';

import { ActionServer } from '../../../server/actions';

function PageDetailOfferBase(props) {
  const { cityName } = props;
  const { id } = useParams();

  const [offerData, setOfferData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    ActionServer.fetchOfferActive(id)
      .then(({ offer, nearby, reviews }) => setOfferData({ offer, nearby, reviews }));

    return setOfferData(null);
  }, [id]);

  if (!offerData) {
    return (
      <PageLoading />
    );
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <Property
          cityName={cityName}
          offers={offerData.nearby}
          offer={offerData.offer}
          reviews={offerData.reviews}
        />

        <div className="container">
          <Nearby offers={offerData.nearby}/>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityName: state.cityName,
});

const PageDetailOffer = connect(mapStateToProps, null)(PageDetailOfferBase);

PageDetailOfferBase.propTypes = {
  cityName: PropTypes.string.isRequired,
};

export { PageDetailOfferBase, PageDetailOffer };
