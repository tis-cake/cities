import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Favorites } from '../../favorites/favorites';

import { ActionCreator } from '../../../store/actions';
import { propTypesOffers } from '../../../types';

function PageFavoritesBase(props) {
  const { cityName, setCityName, favoritesOffers } = props;
  const offersCount = Object.values(favoritesOffers).length;

  const mainElEmptyClass = (offersCount === 0)
    ? 'page__main--favorites-empty'
    : '';

  return (
    <div className="page">
      <Header />

      <main className={`page__main page__main--favorites ${mainElEmptyClass}`}>
        <div className="page__favorites-container container">
          <Favorites
            offers={favoritesOffers}
            offersCount={offersCount}
            cityName={cityName}
            setCityName={setCityName}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  favoritesOffers: state.favoritesOffers,
});

const mapDispatchToProps = (dispatch) => ({
  setCityName(cityName) {
    dispatch(ActionCreator.setCityName(cityName));
    dispatch(ActionCreator.setFilteredOffers());
  },
});

const PageFavorites = connect(mapStateToProps, mapDispatchToProps)(PageFavoritesBase);

PageFavoritesBase.propTypes = {
  cityName: PropTypes.string.isRequired,
  setCityName: PropTypes.func.isRequired,
  favoritesOffers: propTypesOffers,
};

export { PageFavorites, PageFavoritesBase };
