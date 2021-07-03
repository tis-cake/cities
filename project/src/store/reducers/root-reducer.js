import { combineReducers } from 'redux';

import { main } from './main/reducer';
import { user } from './user/reducer';
import { reviews } from './reviews/reducer';
import { favorites } from './favorites/reducer';

const NameSpace = {
  MAIN: 'MAIN',
  USER: 'USER',
  REVIEWS: 'REVIEWS',
  FAVORITES: 'FAVORITES',
};

const rootReducer = combineReducers({
  [NameSpace.MAIN]: main,
  [NameSpace.USER]: user,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.FAVORITES]: favorites,
});

export { rootReducer, NameSpace };
