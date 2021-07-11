import { ActionCreator, ActionType } from './actions';

describe('Actions', () => {
  it('action creator for [setCityName] returns action with 1 payload', () => {
    const expectedPayload = 'Paris';
    const expectedAction = {
      type: ActionType.SET_CITY_NAME,
      payload: expectedPayload,
    };

    expect(ActionCreator.setCityName(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [setSortType] returns action with 1 payload', () => {
    const expectedPayload = 'DEFAULT';
    const expectedAction = {
      type: ActionType.SET_SORT_TYPE,
      payload: expectedPayload,
    };

    expect(ActionCreator.setSortType(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [setInitOffers] returns action with 1 payload', () => {
    const expectedPayload = {};
    const expectedAction = {
      type: ActionType.SET_INIT_OFFERS,
      payload: expectedPayload,
    };

    expect(ActionCreator.setInitOffers(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [setFilteredOffers] returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.SET_FILTERED_OFFERS,
    };

    expect(ActionCreator.setFilteredOffers()).toEqual(expectedAction);
  });

  it('action creator for [changeOffersByFavorite] returns action with 1 payload', () => {
    const expectedPayload = 42;
    const expectedAction = {
      type: ActionType.CHANGE_OFFERS_BY_FAVORITE,
      payload: expectedPayload,
    };

    expect(ActionCreator.changeOffersByFavorite(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [setReviews] returns action with 1 payload', () => {
    const expectedPayload = [];
    const expectedAction = {
      type: ActionType.SET_REVIEWS,
      payload: expectedPayload,
    };

    expect(ActionCreator.setReviews(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [setReviewSendedStatus] returns action with 1 payload', () => {
    const expectedPayload = true;
    const expectedAction = {
      type: ActionType.SET_REVIEW_SENDED_STATUS,
      payload: expectedPayload,
    };

    expect(ActionCreator.setReviewSendedStatus(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [setReviewSendingStatus] returns action with 1 payload', () => {
    const expectedPayload = false;
    const expectedAction = {
      type: ActionType.SET_REVIEW_SENDING_STATUS,
      payload: expectedPayload,
    };

    expect(ActionCreator.setReviewSendingStatus(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [setFavorites] returns action with 1 payload', () => {
    const expectedPayload = [];
    const expectedAction = {
      type: ActionType.SET_FAVORITES,
      payload: expectedPayload,
    };

    expect(ActionCreator.setFavorites(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [logout] returns action with undefined payload', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(ActionCreator.logout()).toEqual(expectedAction);
  });

  it('action creator for [setUser] returns action with 1 payload', () => {
    const expectedPayload = {};
    const expectedAction = {
      type: ActionType.SET_USER,
      payload: expectedPayload,
    };

    expect(ActionCreator.setUser(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [requireAuthorization] returns action with 1 payload', () => {
    const expectedPayload = 'anon';
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: expectedPayload,
    };

    expect(ActionCreator.requireAuthorization(expectedPayload)).toEqual(expectedAction);
  });

  it('action creator for [redirectToRoute] returns action with 1 payload', () => {
    const expectedPayload = 'url';
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: expectedPayload,
    };

    expect(ActionCreator.redirectToRoute(expectedPayload)).toEqual(expectedAction);
  });
});
