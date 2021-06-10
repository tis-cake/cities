import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { PlaceCardItem } from '../../place-card-item/place-card-item';

import { propTypesHotel } from '../../../../types';

const { PlaceCardСities } = PlaceCardItem;

function PlaceCardListСities(props) {
  // eslint-disable-next-line no-unused-vars
  const [ activePlaceCardState, setActivePlaceCardState ] = useState({});

  const { placesList } = props;

  function handlePlaceCardMouseActive(activePlaceCard) {
    // eslint-disable-next-line no-console
    console.log(activePlaceCard);

    setActivePlaceCardState(activePlaceCard);
  }

  return (
    <React.Fragment>
      {placesList.map((place) => (
        <PlaceCardСities
          key={place.id}
          placeData={place}
          onMouseActive={handlePlaceCardMouseActive}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardListСities.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
};

export { PlaceCardListСities };
