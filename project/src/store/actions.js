const ActionType = {
  SET_OFFERS: 'main/setOffers',
  SET_CITY_NAME: 'main/setCityName',
  SET_FILTERED_OFFERS: 'main/setFilteredOffers',
};

function setCityName(cityName) {
  return {
    type: ActionType.SET_CITY_NAME,
    payload: cityName,
  };
}

function setOffers(offers) {
  return {
    type: ActionType.SET_OFFERS,
    payload: offers,
  };
}

function setFilteredOffers() {
  return {
    type: ActionType.SET_FILTERED_OFFERS,
  };
}

const ActionCreator = {
  setOffers,
  setCityName,
  setFilteredOffers,
};

export { ActionType, ActionCreator };
