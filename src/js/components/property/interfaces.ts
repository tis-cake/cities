import { IOffer } from '../../interfaces';

interface IPropertyComponentsProps {
  placeData: IOffer,
}

interface IPropertyProps {
  cityName: string,
  offers: IOffer[],
  offer: IOffer,
  id: string,
  handleFavoriteClick(): void,
}

export { IPropertyComponentsProps, IPropertyProps };
