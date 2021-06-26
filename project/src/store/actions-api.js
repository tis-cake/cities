import { ActionCreator } from './actions';
import { APIRoute, AuthorizationStatus } from '../const';
import { adaptOffersToClient } from '../services/adapter';

const TOKEN = 'token';

const fetchOffersList = () => (dispatch, _getState, api) => {
  api.get(APIRoute.OFFERS)
    .then(({ data }) => adaptOffersToClient(data))
    .then((offers) => dispatch(ActionCreator.setInitOffers(offers)));
};

const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => localStorage.setItem(TOKEN, data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem(TOKEN))
    .then(() => dispatch(ActionCreator.logout()))
);

export {
  checkAuthorization,
  fetchOffersList,
  login,
  logout
};
