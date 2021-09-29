import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Cities } from '../../cities/cities';
import { Header } from '../../shared/header/header';
import { TabsLocations } from '../../tabs-locations/tabs-locations';

import { Selector } from '../../../store/selectors';
import { ActionCreator } from '../../../store/actions';
import { IOffer } from '../../../interfaces';
import { TSetCityName, TSetSortType } from '../../../types';

const PageMain: React.FC = () => {
  const dispatch = useDispatch();

  const cityName: string = useSelector((state) => Selector.getCityName(state));
  const sortType: string = useSelector((state) => Selector.getSortType(state));
  const filteredOffers: IOffer[] = useSelector((state) => Selector.getFilteredOffers(state));
  const offersCount: number = filteredOffers.length;

  const mainElEmptyClass: string = (offersCount === 0)
    ? 'page__main--index-empty'
    : '';

  const setCityName: TSetCityName = (city) => {
    dispatch(ActionCreator.setCityName(city));
    dispatch(ActionCreator.setFilteredOffers());
  };

  const setSortType: TSetSortType = (type) => {
    dispatch(ActionCreator.setSortType(type));
    dispatch(ActionCreator.setFilteredOffers());
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${mainElEmptyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <TabsLocations
            cityCurrent={cityName}
            setCityName={setCityName}
          />
        </div>

        <Cities
          offers={filteredOffers}
          cityName={cityName}
          sortType={sortType}
          setSortType={setSortType}
        />
      </main>
    </div>
  );
};

export { PageMain };
