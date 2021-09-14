import { IOffer } from '../../interfaces';

interface IPlaceCardItemComponentsProps {
  placeData: IOffer,
}

interface IPlaceCardListComponentsProps {
  offers: IOffer[],
}

interface IPlaceCardСitiesProps {
  placeData: IOffer,
  setActiveOffer(placeData: IOffer | {}): void,
}

interface IPlaceCardListСitiesProps {
  offers: IOffer[],
  setActiveOffer(placeData: IOffer | {}): void,
}

export {
  IPlaceCardItemComponentsProps,
  IPlaceCardListComponentsProps,
  IPlaceCardListСitiesProps,
  IPlaceCardСitiesProps,
};
