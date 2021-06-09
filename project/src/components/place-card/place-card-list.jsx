import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { PlaceCard } from './place-card';

import { propTypesHotel } from '../../types';

function PlaceCardList(props) {
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
        <PlaceCard
          key={place.id}
          placeData={place}
          onMouseActive={handlePlaceCardMouseActive}
        />
      ))}
    </React.Fragment>
  );
}

PlaceCardList.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
};

export { PlaceCardList };
