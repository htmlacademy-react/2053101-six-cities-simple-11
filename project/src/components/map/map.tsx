import { useRef, useEffect } from 'react';
import useMap from './../../hooks/useMap';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  offers: Offer[];
  activeOffer: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({offers, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);

  useEffect(() => {
    if(map) {
      offers.forEach((offer) =>{
        const offerLat = offer.location.latitude;
        const offerLng = offer.location.longitude;
        const marker = new Marker({
          lat: offerLat,
          lng: offerLng
        });

        marker.setIcon(
          activeOffer !== null && activeOffer.id === offer.id
            ? currentCustomIcon
            : defaultCustomIcon
        ).addTo(map);
      });
    }
  });

  return(
    <div
      style={{
        height: '760px'
      }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
