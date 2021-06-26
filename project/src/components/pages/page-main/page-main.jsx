import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Cities } from '../../cities/cities';
import { Header } from '../../shared/header/header';
import { TabsLocations } from '../../tabs-locations/tabs-locations';

import { ActionCreator } from '../../../store/actions';
import { propTypesFilteredOffers } from '../../../types';

function PageMainBase(props) {
  const {
    cityName,
    setCityName,
    sortType,
    setSortType,
    filteredOffers,
  } = props;
  const { length: offersCount } = filteredOffers;

  const mainElEmptyClass = (offersCount === 0)
    ? 'page__main--index-empty'
    : '';

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${mainElEmptyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <TabsLocations
            cityCurrent={cityName}
            setCityName={setCityName}
          />
        </div>

        <Cities
          offers={filteredOffers}
          cityName={cityName}
          sortType={sortType}
          setSortType={setSortType}
        />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  sortType: state.sortType,
  filteredOffers: state.filteredOffers,
});

const mapDispatchToProps = (dispatch) => ({
  setCityName(cityName) {
    dispatch(ActionCreator.setCityName(cityName));
    dispatch(ActionCreator.setFilteredOffers());
  },
  setSortType(sortType) {
    dispatch(ActionCreator.setSortType(sortType));
    dispatch(ActionCreator.setFilteredOffers());
  },
});

const PageMain = connect(mapStateToProps, mapDispatchToProps)(PageMainBase);

PageMainBase.propTypes = {
  cityName: PropTypes.string.isRequired,
  setCityName: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  filteredOffers: propTypesFilteredOffers,
};

export { PageMainBase, PageMain };
