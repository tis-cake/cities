import { ActionType } from '../../actions';

const initialState = {
  reviews: [],
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS: {
      return {
        ...state,
        reviews: action.payload,
      };
    }

    default: {
      return (state);
    }
  }
};

export { reviews };
