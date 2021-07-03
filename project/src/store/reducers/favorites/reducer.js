import { ActionType } from '../../actions';

const initialState = {
  favorites: {},
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS: {
      return {
        ...state,
        favorites: action.payload,
      };
    }

    default: {
      return (state);
    }
  }
};

export { favorites };
