/* eslint-disable jsx-a11y/anchor-is-valid */


function Location (props: { value: string }): JSX.Element {
  return (
    <li className="locations__item">
      <a className={props.value === 'Amsterdam' ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#">
        <span>{props.value}</span>
      </a>
    </li>
  );
}

export default Location;
