import React from 'react';
import PropTypes from 'prop-types';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { propTypesHotel } from '../../../../types';

const { PlaceCardFavorites } = PlaceCardItem;

function PlaceCardListFavorites(props) {
  const { placesList, cityName } = props;

  const filtredPlacesList = placesList.filter((place) => (place.isFavorite && place.city.name === cityName));

  return (
    <React.Fragment>
      {filtredPlacesList.map((place) => (
        <PlaceCardFavorites
          key={place.id}
          placeData={place}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardListFavorites.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
  cityName: PropTypes.string.isRequired,
};

export { PlaceCardListFavorites };
