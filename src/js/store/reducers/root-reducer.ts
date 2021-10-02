import { combineReducers } from 'redux';
import { DefaultRootState } from 'react-redux';

import { main } from './main/reducer';
import { user } from './user/reducer';
import { reviews } from './reviews/reducer';
import { favorites } from './favorites/reducer';

type TDefaultRootState = DefaultRootState;

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

export { TDefaultRootState, rootReducer, NameSpace };
