import { ActionType } from '../../actions';

const initialState = {
  favorites: [],

  isDataLoaded: false,
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
        isDataLoaded: true,
      };
    }

    default: {
      return (state);
    }
  }
};

export { favorites };
