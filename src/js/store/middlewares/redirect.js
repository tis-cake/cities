import { ActionType } from '../actions';
import { browserHistory } from '../../services/browser-history';

const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export { redirect };
