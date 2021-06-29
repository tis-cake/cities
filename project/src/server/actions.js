import { api as serverAPI } from '../store/store';
import { ActionCreator } from '../store/actions';
import { AppRoute, APIRoute, AuthorizationStatus } from '../const';
import {
  mapObjID,
  adaptReviewsToClient,
  adaptOffersToClient,
  adaptOfferToClient,
  adaptUserToClient
} from '../services/adapter';

const TOKEN = 'token';

const fetchOfferActive = (id) => (
  Promise.all([
    serverAPI.get(`hotels/${id}`),
    serverAPI.get(`hotels/${id}/nearby`),
    serverAPI.get(`comments/${id}`),
  ])
    .then(([offer, nearby, reviews]) => ({
      offer: adaptOfferToClient(offer.data),
      nearby: adaptOffersToClient(nearby.data),
      reviews: adaptReviewsToClient(reviews.data),
    }))
);

const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => adaptOffersToClient(data))
    .then((offers) => mapObjID(offers))
    .then((offers) => dispatch(ActionCreator.setInitOffers(offers)))
);

const checkAuthorization = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({ data }) => adaptUserToClient(data))
    .then((user) => dispatch(ActionCreator.setUser(user)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then(({ data }) => {
      localStorage.setItem(TOKEN, data.token);
      return adaptUserToClient(data);
    })
    .then((user) => dispatch(ActionCreator.setUser(user)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem(TOKEN))
    .then(() => dispatch(ActionCreator.logout()))
);

const ActionServer = {
  checkAuthorization,
  fetchOfferActive,
  fetchOffersList,
  login,
  logout,
};

export { ActionServer };
