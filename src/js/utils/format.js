const MONTHS = [
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

const PluralSingular = {
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

const identifyPluralOrSingular = (data, count) => {
  const result = (count  < 2) ? data.SINGULAR : data.PLURAL;
  return result;
};

const castBedroomsFormat = (count) => identifyPluralOrSingular(PluralSingular.BEDROOM, count);
const castAdultsFormat = (count) => identifyPluralOrSingular(PluralSingular.ADULT, count);
const castPlacesFormat = (count) => identifyPluralOrSingular(PluralSingular.PLACE, count);

const castNumberFormat = (value) => {
  const result = (value < 10) ? `0${value}` : String(value);
  return result;
};

const formatRating = (rating) => {
  const result = `${rating / 5 * 100}%`;
  return result;
};

const formatRatingRound = (rating) => {
  const result = `${Math.round(rating) / 5 * 100}%`;
  return result;
};

const formatDateTime = (date) => {
  const year = date.getFullYear();
  const month = castNumberFormat(date.getMonth() + 1);
  const day = castNumberFormat(date.getDate());

  const result = `${year}-${month}-${day}`;
  return result;
};

const formatDateReview = (date) => {
  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];

  const result = `${month} ${year}`;
  return result;
};

export {
  castBedroomsFormat,
  castAdultsFormat,
  castPlacesFormat,

  formatRating,
  formatRatingRound,
  formatDateTime,
  formatDateReview
};
