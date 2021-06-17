import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

import { citiesLocation } from '../../const';
import { propTypesHotel } from '../../types';

import 'leaflet/dist/leaflet.css';

const tileLayerURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const tileLayerOptions = {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

// eslint-disable-next-line no-unused-vars
const currentCustomIcon = leaflet.icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const getPointsCurrentCity = (placesList, currentCity) => {
  const result = [];

  for (const place of placesList) {
    if (place.city.name === currentCity) {
      result.push(place.city);
    }
  }

  return result;
};

function Map(props) {
  const mapRef = useRef(null);

  const { placesList, currentCity } = props;

  const locationCurrentCity = citiesLocation[currentCity];
  const pointsCurrentCity = getPointsCurrentCity(placesList, currentCity);

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: {
        lat: locationCurrentCity.latitude,
        lng: locationCurrentCity.longitude,
      },
      zoom: locationCurrentCity.zoom,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(tileLayerURL, tileLayerOptions)
      .addTo(map);

    pointsCurrentCity.forEach((point) => {
      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude,
      },
      {
        icon: defaultCustomIcon,
      })
        .addTo(map)
        .bindPopup(point.popupName);
    });

    return function cleanup() {
      map.off();
      map.remove();
    };
  }, []);

  return (
    <div id="map" ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  placesList: PropTypes.arrayOf(
    PropTypes.shape(propTypesHotel),
  ),
  currentCity: PropTypes.string.isRequired,
};

export { Map };

