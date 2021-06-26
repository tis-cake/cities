const sortPriceLowToHigh = (arr) => {
  const result = arr.slice().sort((a, b) => a.price - b.price);
  return result;
};

const sortPriceHighToLow = (arr) => {
  const result = arr.slice().sort((a, b) => b.price - a.price);
  return result;
};

const sortRatingLowToHigh = (arr) => {
  const result = arr.slice().sort((a, b) => a.rating - b.rating);
  return result;
};

const sortRatingHighToLow = (arr) => {
  const result = arr.slice().sort((a, b) => b.rating - a.rating);
  return result;
};

export {
  sortPriceLowToHigh,
  sortPriceHighToLow,
  sortRatingLowToHigh,
  sortRatingHighToLow
};
