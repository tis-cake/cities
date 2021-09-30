import { IOffer } from '../../interfaces';
import { TActiveOffer } from '../../types';

interface IPlaceCardItemComponentsProps {
  placeData: IOffer,
}

interface IPlaceCardListComponentsProps {
  offers: IOffer[],
}

interface IPlaceCardСitiesProps {
  placeData: IOffer,
  setActiveOffer(placeData: TActiveOffer): void,
}

interface IPlaceCardListСitiesProps {
  offers: IOffer[],
  setActiveOffer(placeData: TActiveOffer): void,
}

export {
  IPlaceCardItemComponentsProps,
  IPlaceCardListComponentsProps,
  IPlaceCardListСitiesProps,
  IPlaceCardСitiesProps,
};
