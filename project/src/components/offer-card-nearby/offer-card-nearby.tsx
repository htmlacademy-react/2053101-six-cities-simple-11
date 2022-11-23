import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type OfferCardNearbyProps = {
  offer: Offer;
}

function OfferCardNearby({offer}: OfferCardNearbyProps): JSX.Element {
  return(
    <article
      className='near-places__card place-card'
    >
      <OfferCard offer={offer} />
    </article>

  );
}

export default OfferCardNearby;
