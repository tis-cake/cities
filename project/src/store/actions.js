const ActionType = {
  SET_CITY_NAME: 'main/setCityName',
  SET_INIT_OFFERS: 'main/setOffers',
  SET_FILTERED_OFFERS: 'main/setFilteredOffers',
  SET_PROPERTY_ACTIVE_ID: 'property/setPropertyActiveID',
};

function setCityName(cityName) {
  return {
    type: ActionType.SET_CITY_NAME,
    payload: cityName,
  };
}

function setPropertyActiveID(id) {
  return {
    type: ActionType.SET_PROPERTY_ACTIVE_ID,
    payload: id,
  };
}

function setInitOffers(initOffers) {
  return {
    type: ActionType.SET_INIT_OFFERS,
    payload: initOffers,
  };
}

function setFilteredOffers() {
  return {
    type: ActionType.SET_FILTERED_OFFERS,
  };
}

const ActionCreator = {
  setCityName,
  setInitOffers,
  setFilteredOffers,
  setPropertyActiveID,
};

export { ActionType, ActionCreator };
