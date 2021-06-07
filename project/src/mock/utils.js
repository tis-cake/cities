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

export {
  getRandomIntInclusive,
  getRandomArrayItem,
  getRandomArrayItemRandomQuantity,
  getRandomBooleanValue,

  generateMocks
};
