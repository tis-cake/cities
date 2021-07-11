import { favorites } from './reducer';

import { ActionType } from '../../actions';

const initialState = {
  favorites: [],

  isDataLoaded: false,
};

describe('Reducer: [favorites]', () => {
  it('without additional parameters should return initial state', () => {
    expect(favorites(undefined, {}))
      .toEqual(initialState);
  });

  it('should update [favorites]', () => {
    const expectedPayload = ['Dio', 'Brando', 42];

    const expectedResult = {
      favorites: expectedPayload,
      isDataLoaded: true,
    };

    const requiredAction = {
      type: ActionType.SET_FAVORITES,
      payload: expectedPayload,
    };

    expect(favorites(initialState, requiredAction))
      .toEqual(expectedResult);
  });
});
