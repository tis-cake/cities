import { IOffer } from '../../interfaces';
import { TSetCityName } from '../../types';

interface IFavoritesComponentsProps {
  favorites: IOffer[],
  cityName: string,
  setCityName: TSetCityName,
}

interface IFavoritesItemProps {
  offers: IOffer[],
  city: string,
  cityCurrent: string,
  setCityName: TSetCityName,
}

export {
  IFavoritesComponentsProps,
  IFavoritesItemProps,
};
