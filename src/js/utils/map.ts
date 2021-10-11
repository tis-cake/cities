import { useState, useEffect } from 'react';
import leaflet from 'leaflet';

import { TActiveOffer } from '../types';
import { ILocation } from '../interfaces';

type TLeafletMap = leaflet.Map;

const tileLayerURL: string = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const tileLayerOptionAttribution: string = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const tileLayerOptions = { attribution: tileLayerOptionAttribution };

const defaultCustomIcon = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const createMarkersStore = () => {
  let markers: leaflet.Marker[] = [];

  return {
    setMarkers(payload: leaflet.Marker[]) {
      markers = [...payload];
    },
    getMarkers() {
      return markers;
    },
  };
};

const prevMarkersStore = createMarkersStore();

const updateLeafletView = (leafletInstance: TLeafletMap, locationCityCurrent: ILocation): void => {
  leafletInstance.setView(
    new leaflet.LatLng(
      locationCityCurrent.latitude,
      locationCityCurrent.longitude,
    ), locationCityCurrent.zoom,
  );
};

const updateLeafletMarkers = (leafletInstance: TLeafletMap, locationPoints: ILocation[], activeOffer: TActiveOffer = {}): void => {
  const markersPrev = prevMarkersStore.getMarkers();
  const markersNext = getLeafletMarkers(locationPoints, activeOffer);

  delLeafletMarkers(leafletInstance, markersPrev);
  addLeafletMarkers(leafletInstance, markersNext);

  prevMarkersStore.setMarkers(markersNext);
};

const getLeafletMarkers = (points: ILocation[], activeOffer: TActiveOffer): leaflet.Marker[] => {
  const result = points.map((point) => leaflet.marker(
    {
      lat: point.latitude,
      lng: point.longitude,
    },
    {
      // @ts-ignore
      icon: (point === activeOffer.location)
        ? currentCustomIcon
        : defaultCustomIcon,
    },
  ));

  return result;
};

const delLeafletMarkers = (leafletInstance: TLeafletMap, markers: leaflet.Marker[]): void => {
  if (markers.length === 0) {
    return;
  }

  markers.forEach((marker) => leafletInstance.removeLayer(marker));
};

const addLeafletMarkers = (leafletInstance: TLeafletMap, markers: leaflet.Marker[]): void => {
  leaflet.featureGroup(markers).addTo(leafletInstance);
};

const useMap = (mapRef: React.MutableRefObject<HTMLDivElement>, locationCityCurrent: ILocation): TLeafletMap => {
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
      });

      leaflet
        .tileLayer(tileLayerURL, tileLayerOptions)
        .addTo(instance);

      setMap(instance);
    }
  }, []);

  return map;
};

export {
  TLeafletMap,
  updateLeafletView,
  updateLeafletMarkers,
  useMap,
};
