const ActionType = {
  SET_CITY_NAME: 'main/setCityName',
  SET_SORT_TYPE: 'main/setSortType',
  SET_INIT_OFFERS: 'main/setOffers',
  SET_FILTERED_OFFERS: 'main/setFilteredOffers',
  SET_DETAIL_OFFER_ACTIVE_ID: 'detail/setDetailOfferActiveID',
};

function setCityName(cityName) {
  return {
    type: ActionType.SET_CITY_NAME,
    payload: cityName,
  };
}

function setSortType(sortType) {
  return {
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  };
}

function setDetailOfferActiveID(id) {
  return {
    type: ActionType.SET_DETAIL_OFFER_ACTIVE_ID,
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
  setSortType,
  setInitOffers,
  setFilteredOffers,
  setDetailOfferActiveID,
};

export { ActionType, ActionCreator };
