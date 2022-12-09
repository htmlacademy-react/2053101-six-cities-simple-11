import { useState, useEffect, MutableRefObject, useRef } from 'react';
import { Offer } from '../types/offer';
import { Map, TileLayer} from 'leaflet';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  offer: Offer
): Map | null {

  const {
    city:{
      location
    }} = offer;
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {

    if(mapRef.current !== null && isRenderedRef.current === false) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: 10
      });

      const layer = new TileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);

      isRenderedRef.current = true;
    }
  }, [mapRef, map, location]);

  return map;
}

export default useMap;
