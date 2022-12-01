import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { Offer } from '../../types/offer';
import { UserReview } from '../../types/review';

type AppMainProps = {
  rentCount: number;
  offers: Offer[];
  reviews: UserReview[];
}

function App({rentCount, offers, reviews}: AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              rentCount={rentCount}
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={`${AppRoute.Property}id`}
          element={
            <Property
              offers={offers}
              reviews={reviews}
            />
          }
        />
        <Route
          path={AppRoute.NotFoundPage}
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
