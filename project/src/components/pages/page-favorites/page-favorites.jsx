import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { FavoritesList } from '../../favorites/favorites-list/favorites-list';

import { propTypesOffers } from '../../../types';

function PageFavoritesBase(props) {
  const { cityName, favoritesOffers } = props;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <FavoritesList
              offers={favoritesOffers}
              cityName={cityName}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityName: state.cityName,
  favoritesOffers: state.offers,
});

const PageFavorites = connect(mapStateToProps)(PageFavoritesBase);

PageFavoritesBase.propTypes = {
  cityName: PropTypes.string.isRequired,
  favoritesOffers: propTypesOffers,
};

export { PageFavorites, PageFavoritesBase };
