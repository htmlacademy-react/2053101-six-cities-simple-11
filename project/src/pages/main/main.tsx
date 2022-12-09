import { Link } from 'react-router-dom';
import Location from '../../components/location/location';
import Logo from '../../components/logo/logo';
import { Offer } from '../../types/offer';
import OfferCardCity from '../../components/offer-card-city/offer-card-city';
import { useState } from 'react';
import Map from '../../components/map/map';

const PopularCity = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf'} as const;

type MainProps = {
  rentCount: number;
  offers: Offer[];
};

function Cities() {
  return(
    <>
      {
        Object.values(PopularCity).map((city) => <Location value={city} key={city} />)
      }
    </>
  );
}

function Main({rentCount, offers}: MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  const handleOfferCardHover = (offerId: number | undefined) => {
    const offer = offerId
      ? offers.find(({ id }) => id === offerId) ?? null
      : null;

    setActiveOffer(offer);
  };

  return (
    <div className="page page--gray page--main">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <Cities />
            </ul>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by{' '}</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <div className="cities__places-list places__list tabs__content">
                {
                  offers.map((offer) => (
                    <OfferCardCity
                      offer={offer}
                      key={offer.id}
                      onHover={handleOfferCardHover}
                    />
                  ))
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
                  activeOffer={activeOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
