import React from 'react';

import { CitiesFilled } from './cities-filled/cities-filled';
import { CitiesEmpty } from './cities-empty/cities-empty';

import { ICitiesComponentsProps } from './cities-interfaces';

const Cities:React.FC<ICitiesComponentsProps> = (props) => {
  const {
    cityName,
    offers: { length: offersCount },
  } = props;

  return (
    <div className="cities">
      {(offersCount > 0) ? <CitiesFilled {...props} /> : <CitiesEmpty cityName={cityName} />}
    </div>
  );
};

export { Cities };
