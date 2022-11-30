import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import OfferCardNearby from '../../components/offer-card-nearby/offer-card-nearby';
import { Offer } from '../../types/offer';
import { PHOTO_GALLERY_COUNT, RATING_RATIO } from '../../const';
import { UserReview } from '../../types/review';
import dayjs from 'dayjs';
import Review from '../../components/review/review';
import { capitalizeFirstChar } from '../../util';

type ProperyProps = {
  offers: Offer[];
  reviews: UserReview[];
}

function Property ({offers, reviews}: ProperyProps): JSX.Element {
  let {id} = useParams();
  id = id?.slice(1);

  const currentOffer = offers.find((offer) => offer.id === Number(id)) as Offer;

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host: {
      name,
      isPro,
      avatarUrl
    },
    description
  } = currentOffer;

  const photoGallery = images
    .slice(0, PHOTO_GALLERY_COUNT)
    .map((image) => (
      <div className="property__image-wrapper" key={image}>
        <img className="property__image" src={image} alt="Studio" />
      </div>)
    );

  const ratingStyle = {
    width: `${rating * RATING_RATIO}%`
  };

  const hotelReviews = reviews.filter((review) => review.id === Number(id));

  const nearbyOffers = offers.filter((offer) => offer.id !== Number(id));

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">

            <Logo />

            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={''}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                photoGallery
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={ratingStyle}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeFirstChar(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {
                    isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">
                    {hotelReviews.length}
                  </span>
                </h2>
                <ul className="reviews__list">
                  {
                    hotelReviews.map((review: UserReview): JSX.Element => (
                      <li className="reviews__item" key={review.comment}>
                        <div className="reviews__user user">
                          <div className="reviews__avatar-wrapper user__avatar-wrapper">
                            <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                          </div>
                          <span className="reviews__user-name">
                            {review.user.name}
                          </span>
                        </div>
                        <div className="reviews__info">
                          <div className="reviews__rating rating">
                            <div className="reviews__stars rating__stars">
                              <span style={
                                { width: `${review.rating * RATING_RATIO}` }
                              }
                              >
                              </span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <p className="reviews__text">
                            {review.comment}
                          </p>
                          <time className="reviews__time" dateTime={review.date}>{dayjs(review.date).format('MMMM YYYY')}</time>
                        </div>
                      </li>
                    ))
                  }
                </ul>

                <Review />

              </section>
            </div>
          </div>

          <section className="property__map map">

          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                nearbyOffers
                  .map((offer) => (
                    <OfferCardNearby offer={offer} key={offer.id}/>)
                  )
              }
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}

export default Property;
