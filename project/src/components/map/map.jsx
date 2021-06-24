import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

import { СitiesLocation } from '../../const';
import { propTypesOffer } from '../../types';

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

function Map(props) {
  const { offers, cityName } = props;

  const mapRef = useRef(null);

  const locationCityCurrent = СitiesLocation[cityName];
  const pointsCityCurrent = offers.map((offer) => offer.city);

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: {
        lat: locationCityCurrent.latitude,
        lng: locationCityCurrent.longitude,
      },
      zoom: locationCityCurrent.zoom,
      zoomControl: false,
      marker: true,
    });

    leaflet
      .tileLayer(tileLayerURL, tileLayerOptions)
      .addTo(map);

    pointsCityCurrent.forEach((point) => {
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
  }, [offers]);

  return (
    <div id="map" ref={mapRef} style={{height: '100%'}}/>
  );
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape(propTypesOffer),
  ),
  cityName: PropTypes.string.isRequired,
};

export { Map };

