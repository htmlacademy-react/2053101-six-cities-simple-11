import { useRef, useEffect } from 'react';
import useMap from './../../hooks/useMap';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { IconMarker} from '../../const';

type MapProps = {
  offers: Offer[];
  activeOffer: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: IconMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: IconMarker.Active,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({offers, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);

  useEffect(() => {
    const markers: Marker[] = [];

    if(map) {

      offers.forEach((offer) =>{
        const offerLat = offer.location.latitude;
        const offerLng = offer.location.longitude;
        const marker = new Marker({
          lat: offerLat,
          lng: offerLng
        });

        marker
          .setIcon(
            activeOffer !== null && activeOffer.id === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);

        markers.push(marker);
      });
    }
    return () => {
      markers.splice(0);
    };
  },[activeOffer, offers, map]);

  return(
    <div
      style={{
        height: '100vh'
      }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;

