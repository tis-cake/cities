const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

interface IPluralSingularBase {
  SINGULAR: string,
  PLURAL: string,
}

interface IPluralSingular {
  [key: string]: IPluralSingularBase,
}

const PluralSingular: IPluralSingular = {
  BEDROOM: {
    SINGULAR: 'Bedroom',
    PLURAL: 'Bedrooms',
  },
  ADULT: {
    SINGULAR: 'adult',
    PLURAL: 'adults',
  },
  PLACE: {
    SINGULAR: 'place',
    PLURAL: 'places',
  },
};

const identifyPluralOrSingular = (data: IPluralSingularBase, count: number): string => {
  const result = (count  < 2) ? data.SINGULAR : data.PLURAL;
  return result;
};

const castBedroomsFormat = (count: number): string => identifyPluralOrSingular(PluralSingular.BEDROOM, count);
const castAdultsFormat = (count: number): string => identifyPluralOrSingular(PluralSingular.ADULT, count);
const castPlacesFormat = (count: number): string => identifyPluralOrSingular(PluralSingular.PLACE, count);

const castNumberFormat = (value: number): string => {
  const result: string = (value < 10) ? `0${value}` : String(value);
  return result;
};

const formatRating = (rating: number): string => {
  const result: string = `${(rating / 5) * 100}%`;
  return result;
};

const formatRatingRound = (rating: number): string => {
  const result: string = `${(Math.round(rating) / 5) * 100}%`;
  return result;
};

const formatDateTime = (date: Date): string => {
  const year: number = date.getFullYear();
  const month: string = castNumberFormat(date.getMonth() + 1);
  const day: string = castNumberFormat(date.getDate());

  const result: string = `${year}-${month}-${day}`;
  return result;
};

const formatDateReview = (date: Date): string => {
  const year: number = date.getFullYear();
  const month: string = MONTHS[date.getMonth()];

  const result: string = `${month} ${year}`;
  return result;
};

export {
  castBedroomsFormat,
  castAdultsFormat,
  castPlacesFormat,

  formatRating,
  formatRatingRound,
  formatDateTime,
  formatDateReview,
};
