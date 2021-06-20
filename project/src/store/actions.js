const ActionType = {
  SET_OFFERS: 'main/setOffers',
  SET_CITY_NAME: 'main/setCityName',
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

const ActionCreator = {
  setCityName,
  setOffers,
};

export { ActionType, ActionCreator };
