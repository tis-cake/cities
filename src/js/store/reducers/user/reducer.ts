import { ActionType } from '../../actions';
import { AuthorizationStatus } from '../../../const';
import { TUserReducer } from './types';

const initialState: TUserReducer = {
  user: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action): TUserReducer => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }

    case ActionType.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case ActionType.LOGOUT: {
      return {
        ...state,
        user: {},
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    }

    default: {
      return (state);
    }
  }
};

export { user };
