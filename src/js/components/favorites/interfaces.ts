import { ISetCityName, IOffer } from '../../interfaces';

interface IFavoritesComponentsProps {
  favorites: IOffer[],
  cityName: string,
  setCityName: ISetCityName,
}

interface IFavoritesItemProps {
  offers: IOffer[],
  city: string,
  cityCurrent: string,
  setCityName: ISetCityName,
}

export {
  IFavoritesComponentsProps,
  IFavoritesItemProps,
};
