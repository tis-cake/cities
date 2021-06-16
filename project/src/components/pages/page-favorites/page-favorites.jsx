import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { FavoritesList } from '../../favorites/favorites-list/favorites-list';

import { propTypesHotel } from '../../../types';

function PageFavorites(props) {
  const { placesList } = props;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <FavoritesList
              placesList={placesList}
              currentCity={'Amsterdam'}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

PageFavorites.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
};

export { PageFavorites };
