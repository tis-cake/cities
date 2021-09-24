import React from 'react';

import { ICitiesEmptyProps } from '../interfaces';

const CitiesEmpty: React.FC<ICitiesEmptyProps> = ({ cityName }) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in
            {cityName}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );
};

export { CitiesEmpty };