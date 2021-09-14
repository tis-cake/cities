import { IOffer } from '../../interfaces';

interface ICitiesComponentsProps {
  offers: IOffer[],
  cityName: string,
  sortType: string,
  setSortType(): void,
}

export { ICitiesComponentsProps };
