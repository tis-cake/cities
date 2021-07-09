import MockAdapter from 'axios-mock-adapter';

import { createAPI } from './api';
import { ActionServer } from './actions';
import { ActionCreator } from '../store/actions';
import { AppRoute, APIRoute, AuthorizationStatus } from '../const';

let api = null;

const responseFakeData = [{ fake: true }];

const dataMockUser = {
  'avatarUrl': undefined,
  'email': undefined,
  'id': undefined,
  'isPro': undefined,
  'name': undefined,
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('correct API call to [GET /login], action server [checkAuthorization]', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const actionServerCallback = ActionServer.checkAuthorization();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, responseFakeData);

    return actionServerCallback(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.setUser(dataMockUser));
        expect(dispatch).toHaveBeenNthCalledWith(2, ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  });

  it('correct API call to [POST /login], action server [login]', () => {
    const fakeUser = { email: 'test@test.ru', password: '123456' };

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const actionServerCallback = ActionServer.login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, responseFakeData);

    return actionServerCallback(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.setUser(dataMockUser));
        expect(dispatch).toHaveBeenNthCalledWith(2, ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        expect(dispatch).toHaveBeenNthCalledWith(3, ActionCreator.redirectToRoute(AppRoute.ROOT));
      });
  });

  it('correct API call to [DELETE /logout], action server [logout]', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const actionServerCallback = ActionServer.logout();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(200);

    return actionServerCallback(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, ActionCreator.logout());
      });
  });
});
