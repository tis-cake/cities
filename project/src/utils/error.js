import { AppRoute, HttpCode } from '../const';
import { ActionCreator } from '../store/actions';

const handleError = (error, dispatch) => {
  const { response } = error;
  const { status } = response;

  if (status === HttpCode.UNAUTHORIZED) {
    dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));
  }
};

export { handleError };
