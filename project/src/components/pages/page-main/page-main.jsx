import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Cities } from '../../cities/cities';
import { Header } from '../../shared/header/header';
import { TabsLocations } from '../../tabs-locations/tabs-locations';

import { ActionCreator } from '../../../store/actions';
import { propTypesFilteredOffers } from '../../../types';
import { DATA_HOTELS } from '../../../mock/data';

function PageMainBase(props) {
  const { cityName, setCityName, filteredOffers, setInitOffers } = props;
  const { length: offersCount } = filteredOffers;

  const mainElEmptyClass = (offersCount === 0)
    ? 'page__main--index-empty'
    : '';

  useEffect(() => {
    setInitOffers(DATA_HOTELS);
  }, []);

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
        />
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
  setInitOffers(initOffers) {
    dispatch(ActionCreator.setInitOffers(initOffers));
  },
});

const PageMain = connect(mapStateToProps, mapDispatchToProps)(PageMainBase);

PageMainBase.propTypes = {
  cityName: PropTypes.string.isRequired,
  setCityName: PropTypes.func.isRequired,
  filteredOffers: propTypesFilteredOffers,
  setInitOffers: PropTypes.func.isRequired,
};

export { PageMainBase, PageMain };
