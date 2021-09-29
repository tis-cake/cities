import { IOffer } from '../../interfaces';
import { TSetSortType } from '../../types';

interface ICitiesComponentsProps {
  offers: IOffer[],
  cityName: string,
  sortType: string,
  setSortType: TSetSortType,
}

interface ICitiesEmptyProps {
  cityName: string,
}

export { ICitiesComponentsProps, ICitiesEmptyProps };
