import {Link} from 'react-router-dom';
import { AppRoute } from '../../mocks/const';

function NotFoundPage(): JSX.Element {
  return(
    <section className="game__screen">
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundPage;
