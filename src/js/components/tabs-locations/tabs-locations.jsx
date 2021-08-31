import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { AppRoute, Cities } from '../../const';

function handleLocationLinkClick(city, cityCurrent, setCityName) {
  if (city !== cityCurrent) {
    setCityName(city);
  }
}

function TabsLocations({ cityCurrent, setCityName }) {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list" data-testid="tabs-locations">
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
}

TabsLocations.propTypes = {
  cityCurrent: PropTypes.string.isRequired,
  setCityName: PropTypes.func.isRequired,
};

export { TabsLocations };
