import { api as serverAPI } from '../store/store';
import { ActionCreator } from '../store/actions';
import { handleError } from '../utils/error/error';
import { AppRoute, APIRoute, AuthorizationStatus } from '../const';
import {
  mapObjID,
  adaptReviewsToClient,
  adaptOffersToClient,
  adaptOfferToClient,
  adaptUserToClient
} from './adapter';

const TOKEN = 'token';

const fetchDetailOffer = (id) => (
  Promise.all([
    serverAPI.get(`${APIRoute.OFFERS}/${id}`),
    serverAPI.get(`${APIRoute.OFFERS}/${id}/nearby`),
  ])
    .then(([offer, nearby]) => ({
      offer: adaptOfferToClient(offer.data),
      nearby: adaptOffersToClient(nearby.data),
    }))
);

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({ data }) => adaptOffersToClient(data))
    .then((offers) => mapObjID(offers))
    .then((offers) => dispatch(ActionCreator.setInitOffers(offers)))
    .catch((err) => handleError(err))
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.REVIEWS}/${id}`)
    .then(({ data }) => adaptReviewsToClient(data))
    .then((reviews) => dispatch(ActionCreator.setReviews(reviews)))
    .catch((err) => handleError(err))
);

const postReview = (id, comment) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setReviewSendedStatus(false));
  dispatch(ActionCreator.setReviewSendingStatus(true));

  api.post(`${APIRoute.REVIEWS}/${id}`, comment)
    .then(() => {
      dispatch(ActionCreator.setReviewSendedStatus(true));
      dispatch(ActionCreator.setReviewSendingStatus(false));
    })
    .then(() => api.get(`${APIRoute.REVIEWS}/${id}`))
    .then(({ data }) => adaptReviewsToClient(data))
    .then((reviews) => dispatch(ActionCreator.setReviews(reviews)))
    .catch((err) => {
      dispatch(ActionCreator.setReviewSendedStatus(false));
      dispatch(ActionCreator.setReviewSendingStatus(false));
      handleError(err);
    });
};

const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITES)
    .then(({ data }) => adaptOffersToClient(data))
    .then((favorites) => dispatch(ActionCreator.setFavorites(favorites)))
    .catch((err) => handleError(err))
);

const postFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITES}/${id}/${Number(status)}`)
    .then(() => api.get(APIRoute.FAVORITES))
    .then(({ data }) => adaptOffersToClient(data))
    .then((favorites) => dispatch(ActionCreator.setFavorites(favorites)))
    .then(() => dispatch(ActionCreator.changeOffersByFavorite(id)))
    .catch((err) => handleError(err, dispatch))
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
    .catch((err) => handleError(err))
);

const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem(TOKEN))
    .then(() => dispatch(ActionCreator.logout()))
    .catch(() => {})
);

const ActionServer = {
  fetchDetailOffer,
  fetchOffers,
  fetchReviews,
  postReview,
  fetchFavorites,
  postFavorite,

  checkAuthorization,
  login,
  logout,
};

export { ActionServer };
