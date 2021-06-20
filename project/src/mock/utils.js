const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntInclusive(0, array.length - 1);
  return array[randomIndex];
};

const getRandomArrayItemRandomQuantity = (array) => {
  const randomInt = getRandomIntInclusive(1, array.length - 1);

  return new Array(randomInt)
    .fill('')
    .map(() => getRandomArrayItem(array))
    .filter((val, i, arr) => arr.indexOf(val) === i);
};

const getRandomBooleanValue = () => (Math.random() > 0.5);

// eslint-disable-next-line arrow-body-style
const generateMocks = (count, getMockupCallback) => {
  return new Array(count)
    .fill('')
    .map(getMockupCallback);
};

const generateRandomDate = () => {
  const targetDate = new Date();

  const yearBorderLower = 2019;
  const yearBorderUpper = targetDate.getFullYear();
  const yearBorder = yearBorderUpper - yearBorderLower;

  const diffValYear = -1 * getRandomIntInclusive(0, yearBorder);
  const diffValMonth = -1 * getRandomIntInclusive(0, 12);
  const diffValDate = -1 * getRandomIntInclusive(0, 7);

  targetDate.setFullYear(targetDate.getFullYear() + diffValYear);
  targetDate.setMonth(targetDate.getMonth() + diffValMonth);
  targetDate.setDate(targetDate.getDate() + diffValDate);

  return targetDate;
};

export {
  getRandomIntInclusive,
  getRandomArrayItem,
  getRandomArrayItemRandomQuantity,
  getRandomBooleanValue,

  generateMocks,
  generateRandomDate
};
