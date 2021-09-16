import React from 'react';
import { NavLink } from 'react-router-dom';

import { AppRoute, Cities } from '../../const';
import { ISetCityName } from '../../interfaces';

interface ITabsLocationsProps {
  cityCurrent: string,
  setCityName: ISetCityName,
}

function handleLocationLinkClick(city: string, cityCurrent: string, setCityName: ISetCityName): void {
  if (city !== cityCurrent) {
    setCityName(city);
  }
}

const TabsLocations: React.FC<ITabsLocationsProps> = ({ cityCurrent, setCityName }) => {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(Cities).map((city) => (
          <li key={`locations-item-${city}`} className="locations__item">
            <NavLink
              className="locations__item-link tabs__item"
              activeClassName="tabs__item--active"
              isActive={() => (city === cityCurrent)}
              to={AppRoute.ROOT}
              onClick={() => handleLocationLinkClick(city, cityCurrent, setCityName)}
            >
              <span>{city}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { TabsLocations };
