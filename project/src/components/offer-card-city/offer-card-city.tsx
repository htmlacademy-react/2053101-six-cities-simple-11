import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type OfferCardCityProps = {
  offer: Offer;
}

function OfferCardCity({offer}: OfferCardCityProps): JSX.Element {
  const [, setOfferCardId] = useState('');

  function handleMouseEnter(): void {
    setOfferCardId(() => `${offer.id}`);
  }

  function handleMouseLeave(): void {
    setOfferCardId(() => (''));
  }

  return(
    <article
      className='cities__card place-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OfferCard offer={offer} />
    </article>

  );
}

export default OfferCardCity;
