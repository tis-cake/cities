import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../shared/header/header';
import { Property } from '../../property/property';
import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { propTypesHotel } from '../../../types';

const { PlaceCardListNearPlaces } = PlaceCardList;

function PageRoomDetail({ placesList }) {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <Property placesList={placesList}/>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <PlaceCardListNearPlaces placesList={placesList}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

PageRoomDetail.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
};

export { PageRoomDetail };
