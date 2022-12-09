import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type OfferCardCityProps = {
  offer: Offer;
  onHover: (offerId?: number) => void;
}

function OfferCardCity({offer, onHover}: OfferCardCityProps): JSX.Element {
  const {id} = offer;

  return(
    <article
      className='cities__card place-card'
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover()}
    >
      <OfferCard offer={offer} />
    </article>

  );
}

export default OfferCardCity;
