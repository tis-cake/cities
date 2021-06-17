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

const castBedroomsFormat = (bedrooms) => (bedrooms  < 2) ? 'Bedroom' : 'Bedrooms';

const castAdultsFormat = (adults) => (adults  < 2) ? 'adult' : 'adults';

const castNumberFormat = (value) => {
  const result = (value < 10) ? `0${value}` : String(value);
  return result;
};

const formatRating = (rating) => {
  const result = `${rating / 5 * 100}%`;
  return result;
};

const formatDateTime = (date) => {
  const year = date.getFullYear();
  const month = castNumberFormat(date.getMonth() + 1);
  const day = date.getDate();

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

  formatRating,
  formatDateTime,
  formatDateReview
};
