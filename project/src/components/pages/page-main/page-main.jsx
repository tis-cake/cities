import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActionCreator } from '../../../store/actions';

import { Map } from '../../map/map';
import { Header } from '../../shared/header/header';
import { TabsLocations } from '../../tabs-locations/tabs-locations';
import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { castPlacesFormat } from '../../../utils/format';
import { propTypesFilteredOffers } from '../../../types';
import { DATA_HOTELS } from '../../../mock/data';

const { PlaceCardListСities } = PlaceCardList;

function PageMainBase(props) {
  const { cityName, filteredOffers, setOffers, setCityName } = props;
  const { length: offersCount } = filteredOffers;

  useEffect(() => {
    setOffers(DATA_HOTELS);
  }, []);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <TabsLocations
            cityCurrent={cityName}
            setCityName={setCityName}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} {castPlacesFormat(offersCount)} to stay in {cityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardListСities offers={filteredOffers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={filteredOffers}
                  cityName={cityName}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  filteredOffers: state.filteredOffers,
});

const mapDispatchToProps = (dispatch) => ({
  setCityName(cityName) {
    dispatch(ActionCreator.setCityName(cityName));
    dispatch(ActionCreator.setFilteredOffers());
  },
  setOffers(offers) {
    dispatch(ActionCreator.setOffers(offers));
  },
});

const PageMain = connect(mapStateToProps, mapDispatchToProps)(PageMainBase);

PageMainBase.propTypes = {
  cityName: PropTypes.string.isRequired,
  filteredOffers: propTypesFilteredOffers,
  setCityName: PropTypes.func.isRequired,
  setOffers: PropTypes.func.isRequired,
};

export { PageMainBase, PageMain };
