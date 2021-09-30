import React, { useRef, useEffect } from 'react';

import { CitiesLocation } from '../../const';
import { TActiveOffer } from '../../types';
import { ILocation, IOffer } from '../../interfaces';
import {
  TLeafletMap,
  updateLeafletView,
  updateLeafletMarkers,
  useMap,
} from '../../utils/map';

import 'leaflet/dist/leaflet.css';

interface IMapProps {
  offers: IOffer[],
  cityName: string,
  activeOffer: TActiveOffer,
}

const Map: React.FC<IMapProps> = ({ offers, cityName, activeOffer = {} }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const locationCityCurrent: ILocation = CitiesLocation[cityName];
  const locationPoints: ILocation[] = offers.map((offer) => offer.location);

  const map: TLeafletMap = useMap(mapRef, locationCityCurrent);

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
  }, [map, activeOffer]);

  return (
    <div id="map" ref={mapRef} style={{ height: '100%' }} />
  );
};

export { Map };
