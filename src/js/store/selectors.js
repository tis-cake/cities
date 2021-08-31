import { SelectorMain } from './reducers/main/selector';
import { SelectorUser } from './reducers/user/selector';
import { SelectorReviews } from './reducers/reviews/selector';
import { SelectorFavorites } from './reducers/favorites/selector';

const Selector = {
  ...SelectorMain,
  ...SelectorUser,
  ...SelectorReviews,
  ...SelectorFavorites,
};

export { Selector };
