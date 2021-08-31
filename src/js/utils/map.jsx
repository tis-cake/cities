import { useState, useEffect } from 'react';
import leaflet from 'leaflet';

const tileLayerURL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const tileLayerOptions = {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const createMarkersStore = () => {
  let markers = [];

  return {
    setMarkers(payload) {
      markers = [...payload];
    },
    getMarkers() {
      return markers;
    },
  };
};

const prevMarkersStore = createMarkersStore();

const updateLeafletView = (leafletInstance, locationCityCurrent) => {
  leafletInstance.setView(
    new leaflet.LatLng(
      locationCityCurrent.latitude,
      locationCityCurrent.longitude,
    ), locationCityCurrent.zoom);
};

const updateLeafletMarkers = (leafletInstance, locationPoints, activeOffer = false) => {
  const markersPrev = prevMarkersStore.getMarkers();
  const markersNext = getLeafletMarkers(locationPoints, activeOffer);

  clearLeafletMarkers(leafletInstance, markersPrev);
  setLeafletMarkers(leafletInstance, markersNext);

  prevMarkersStore.setMarkers(markersNext);
};

const getLeafletMarkers = (points, activeOffer = false) => {
  const result = points.map((point) => leaflet.marker(
    {
      lat: point.latitude,
      lng: point.longitude,
    },
    {
      icon: (point === activeOffer.location)
        ? currentCustomIcon
        : defaultCustomIcon,
    },
  ));

  return result;
};

const clearLeafletMarkers = (leafletInstance, markers) => {
  if (markers.length === 0) {
    return;
  }

  markers.forEach((marker) => leafletInstance.removeLayer(marker));
};

const setLeafletMarkers = (leafletInstance, markers) => {
  leaflet.featureGroup(markers).addTo(leafletInstance);
};

const useMap = (mapRef, locationCityCurrent) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
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
        .addTo(instance);

      setMap(instance);
    }
  }, []);

  return { map };
};

export {
  updateLeafletView,
  updateLeafletMarkers,
  useMap
};
