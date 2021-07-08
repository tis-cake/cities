import { AppRoute, HttpCode } from '../../const';
import { ActionCreator } from '../../store/actions';

import './error.css';

const TIMEOUT = 800;

const onErrorShowModal = (errorStatus, errorText) => {
  const node = document.createElement('div');
  node.classList.add('error-modal');
  node.textContent = `Ooops! Error status: ${errorStatus}. Error text: ${errorText}.`;

  document.body.insertAdjacentElement('afterbegin', node);

  setTimeout(() => {
    node.remove();
  }, TIMEOUT * 4);
};

const handleError = (error, dispatch) => {
  const { response } = error;
  const { status, statusText } = response;

  if (status === HttpCode.UNAUTHORIZED) {
    dispatch(ActionCreator.redirectToRoute(AppRoute.LOGIN));

    return;
  }

  onErrorShowModal(status, statusText);
};

export { handleError };
