import { user } from './reducer';

import { ActionType } from '../../actions';
import { AuthorizationStatus } from '../../../const';

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

describe('Reducer: [user]', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual(initialState);
  });

  it('should update [authorizationStatus] to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    const expectedPayload = AuthorizationStatus.AUTH;

    const expectedResult = {
      authorizationStatus: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: expectedPayload,
    };

    expect(user(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [authorizationStatus] to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    };

    const expectedPayload = AuthorizationStatus.NO_AUTH;

    const expectedResult = {
      authorizationStatus: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: expectedPayload,
    };

    expect(user(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [user] after action [setUser]', () => {
    const state = {
      user: {},
    };

    const expectedPayload = {
      name: 'Dio',
      lastname: 'Brando',
    };

    const expectedResult = {
      user: expectedPayload,
    };

    const requiredAction = {
      type: ActionType.SET_USER,
      payload: expectedPayload,
    };

    expect(user(state, requiredAction))
      .toEqual(expectedResult);
  });

  it('should update [state] after action [logout]', () => {
    const requiredAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(initialState, requiredAction))
      .toEqual(initialState);
  });
});
