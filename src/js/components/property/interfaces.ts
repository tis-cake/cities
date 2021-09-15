import { IOffer } from '../../interfaces';
import { TID } from '../../types';

interface IPropertyComponentsProps {
  placeData: IOffer,
}

interface IPropertyProps {
  cityName: string,
  offers: IOffer[],
  offer: IOffer,
  id: TID,
  handleFavoriteClick(): void,
}

export { IPropertyComponentsProps, IPropertyProps };
