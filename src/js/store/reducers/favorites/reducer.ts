import { ActionType } from '../../actions';
import { TFavoritesReducer } from './types';

const initialState: TFavoritesReducer = {
  favorites: [],
  isDataLoaded: false,
};

const favorites = (state = initialState, action): TFavoritesReducer => {
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
