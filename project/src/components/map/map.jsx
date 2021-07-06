import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { СitiesLocation } from '../../const';
import { propTypesOffersARR } from '../../types';
import {
  updateLeafletView,
  updateLeafletMarkers,
  useMap
} from '../../utils/map';

import 'leaflet/dist/leaflet.css';

function Map({offers, cityName, activeOffer = {}}) {
  const mapRef = useRef(null);

  const locationCityCurrent = СitiesLocation[cityName];
  const locationPoints = offers.map((offer) => offer.location);

  const { map } = useMap(mapRef, locationCityCurrent);

  useEffect(() => {
    if (map) {
      updateLeafletView(map, locationCityCurrent);
      updateLeafletMarkers(map, locationPoints);
    }
  }, [cityName, locationPoints]);

  useEffect(() => {
    if (map) {
      updateLeafletMarkers(map, locationPoints, activeOffer);
    }
  }, [activeOffer]);

  return (
    <div id="map" ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  offers: propTypesOffersARR,
  cityName: PropTypes.string.isRequired,
  activeOffer: PropTypes.any,
};

export { Map };

