import React, { useState } from 'react';

import { Map } from '../../map/map';
import { Sort } from '../../shared/sort/sort';
import { PlaceCardList } from '../../place-card/place-card-list/place-card-list';

import { castPlacesFormat } from '../../../utils/format';
import { ICitiesComponentsProps } from '../cities-interfaces';

const { PlaceCardListСities } = PlaceCardList;

const CitiesFilled: React.FC<ICitiesComponentsProps> = ({ offers, cityName, sortType, setSortType }) => {
  const { length: offersCount } = offers;
  const [activeOffer, setActiveOffer] = useState({});

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersCount} {castPlacesFormat(offersCount)} to stay in {cityName}</b>

        <Sort
          sortType={sortType}
          setSortType={setSortType}
        />

        <div className="cities__places-list places__list tabs__content">
          <PlaceCardListСities
            offers={offers}
            setActiveOffer={setActiveOffer}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            offers={offers}
            cityName={cityName}
            activeOffer={activeOffer}
          />
        </section>
      </div>
    </div>
  );
};

export { CitiesFilled };
