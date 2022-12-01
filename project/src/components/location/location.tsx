
import { Link } from 'react-router-dom';


function Location (props: { value: string }): JSX.Element {
  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${props.value === 'Amsterdam' ? 'tabs__item--active' : ''}`} to="#" >
        <span>{props.value}</span>
      </Link>
    </li>
  );
}

export default Location;
