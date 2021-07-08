import { ActionType } from '../../actions';

const initialState = {
  reviews: [],

  isDataSending: false,
  isDataSended: false,
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEWS: {
      return {
        ...state,
        reviews: action.payload,
      };
    }

    case ActionType.SET_REVIEW_SENDED_STATUS: {
      return {
        ...state,
        isDataSended: action.payload,
      };
    }

    case ActionType.SET_REVIEW_SENDING_STATUS: {
      return {
        ...state,
        isDataSending: action.payload,
      };
    }

    default: {
      return (state);
    }
  }
};

export { reviews };
