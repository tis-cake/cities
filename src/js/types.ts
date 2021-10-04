import { SortType, Cities } from './const';
import { IOffer } from './interfaces';

type TID = string | number;

type TActiveOffer = IOffer | {};

type TSetCityName = (city: string) => void;

type TSetSortType = (type: string) => void;

// type TSetCityName = React.Dispatch<React.SetStateAction<string>>;
// type TSetSortType = React.Dispatch<React.SetStateAction<string>>;

type TShowNotify = (notifyMessage?: string) => void;

type TFormNotifyInjectedProps = {
  showNotify(notifyMessage?: string): void,
  renderFormNotify(): JSX.Element,
};

type TOffersByID = {
  [key: number]: IOffer,
};

type TOffersByCitiesID = {
  [firstKey in keyof typeof Cities]: {
    [secondKey in keyof typeof SortType]: [] | number[]
  }
};

export {
  TID,
  TActiveOffer,
  TSetCityName,
  TSetSortType,
  TShowNotify,
  TFormNotifyInjectedProps,
  TOffersByID,
  TOffersByCitiesID,
};
