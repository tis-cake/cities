const mapObjID = (items) => {
  const result = {};

  for (const item of items) {
    result[item.id] = item;
  }

  return result;
};

const HOTEL_CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const HOTEL_HOST_NAMES = [
  'Richard',
  'Feynman',
  'Ricardo',
  'Milos',
];

const HOTEL_HOST_AVATARS = [
  './img/avatar-angelina.jpg',
  './img/avatar-max.jpg',
];

const HOTEL_IMAGES = [
  './img/apartment-01.jpg',
  './img/apartment-02.jpg',
  './img/apartment-03.jpg',
  './img/room.jpg',
];

const HOTEL_IMAGES_PREVIEW = [
  './img/apartment-small-03.jpg',
  './img/apartment-small-04.jpg',
  './img/room-small.jpg',
];

const HOTEL_TYPES = [
  'Private room',
  'Apartment',
];

const HOTEL_GOODS = [
  'Heating',
  'Kitchen',
  'Cable TV',
  'Washing machine',
  'Coffee machine',
  'Dishwasher',
];

const HOTEL_TITLES = [
  'Beautiful & luxurious apartment at great location',
  'Wood and stone place',
  'Canal View Prinsengracht',
  'Nice, cozy, warm big bed apartment',
  'Wood and stone place',
];

const HOTEL_DESCRIPTIONS = [
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Phasellus eros mauris, condimentum sed nibh vitae,',
  'sodales efficitur ipsum. Sed blandit, eros vel aliquam',
  'faucibus, purus ex euismod diam, eu luctus nunc ante ut',
  'dui. Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta',
];

export {
  HOTEL_CITIES,
  HOTEL_HOST_NAMES,
  HOTEL_HOST_AVATARS,
  HOTEL_IMAGES,
  HOTEL_IMAGES_PREVIEW,
  HOTEL_TYPES,
  HOTEL_GOODS,
  HOTEL_TITLES,
  HOTEL_DESCRIPTIONS,

  mapObjID
};
