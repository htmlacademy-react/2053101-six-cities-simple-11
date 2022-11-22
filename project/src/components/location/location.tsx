
import { Link } from 'react-router-dom';


function Location (props: { value: string }): JSX.Element {
  return (
    <li className="locations__item">
      <Link className={props.value === 'Amsterdam' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} to="#">
        <span>{props.value}</span>
      </Link>
    </li>
  );
}

export default Location;
