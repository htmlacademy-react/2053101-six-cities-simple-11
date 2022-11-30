import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { offerTypeLetter, AppRoute } from '../../const';
import { getRatingWidth } from '../../util';

type OfferCardProp = {
  offer: Offer;
}

function OfferCard ({offer}: OfferCardProp): JSX.Element {
  const {
    previewImage,
    title,
    isPremium,
    price,
    rating,
    type,
    id
  } = offer;

  const ratingStyle = {
    width: getRatingWidth(rating)
  };

  // const propertyRoute = `offer/:${id}`;

  const offerType = type[offerTypeLetter.first].toUpperCase() + type.slice(offerTypeLetter.other);

  return (
    <>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Property}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}{' '}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{offerType}</p>
      </div>
    </>
  );
}

export default OfferCard;
