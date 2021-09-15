import { ISetSortType, IOffer } from '../../interfaces';

interface ICitiesComponentsProps {
  offers: IOffer[],
  cityName: string,
  sortType: string,
  setSortType: ISetSortType,
}

interface ICitiesEmptyProps {
  cityName: string,
}

export { ICitiesComponentsProps, ICitiesEmptyProps };
