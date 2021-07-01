import { ActionType } from '../../actions';
import { AuthorizationStatus } from '../../../const';

const initialState = {
  user: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = (state = initialState, action) => {
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
