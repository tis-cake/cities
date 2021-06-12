import React from 'react';
import PropTypes from 'prop-types';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { propTypesHotel } from '../../../../types';

const { PlaceCardNearPlaces } = PlaceCardItem;

function PlaceCardListNearPlaces(props) {
  const { placesList } = props;

  // временно ограничиваем до 3 элементов
  const slicedPlacesList = placesList.slice(0, 3);

  return (
    <React.Fragment>
      {slicedPlacesList.map((place) => (
        <PlaceCardNearPlaces
          key={place.id}
          placeData={place}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardListNearPlaces.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
};

export { PlaceCardListNearPlaces };
