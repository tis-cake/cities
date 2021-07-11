import { reviews } from './reducer';

import { ActionType } from '../../actions';

const initialState = {
  reviews: [],

  isDataSended: false,
  isDataSending: false,
};

describe('Reducer: [reviews]', () => {
  it('without additional parameters should return initial state', () => {
    expect(reviews(undefined, {}))
      .toEqual(initialState);
  });

  it('should update [reviews]', () => {
    const state = {
      reviews: [],
    };

    const expectedPayload = ['Dio', 'Brando', 42];

    const expectedResult = {
      reviews: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.SET_REVIEWS,
      payload: expectedPayload,
    };

    expect(reviews(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [isDataSended] to "false"', () => {
    const state = {
      isDataSended: false,
    };

    const expectedPayload = false;

    const expectedResult = {
      isDataSended: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.SET_REVIEW_SENDED_STATUS,
      payload: expectedPayload,
    };

    expect(reviews(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [isDataSended] to "true"', () => {
    const state = {
      isDataSended: false,
    };

    const expectedPayload = true;

    const expectedResult = {
      isDataSended: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.SET_REVIEW_SENDED_STATUS,
      payload: expectedPayload,
    };

    expect(reviews(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [isDataSending] to "false"', () => {
    const state = {
      isDataSending: false,
    };

    const expectedPayload = false;

    const expectedResult = {
      isDataSending: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.SET_REVIEW_SENDING_STATUS,
      payload: expectedPayload,
    };

    expect(reviews(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [isDataSending] to "true"', () => {
    const state = {
      isDataSending: false,
    };

    const expectedPayload = true;

    const expectedResult = {
      isDataSending: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.SET_REVIEW_SENDING_STATUS,
      payload: expectedPayload,
    };

    expect(reviews(state, requiredAction))
      .toEqual(expectedResult);
  });
});
