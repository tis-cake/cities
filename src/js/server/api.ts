import axios from 'axios';

const BACKEND_URL: string = 'https://8.react.pages.academy/six-cities';
const REQUEST_TIMEOUT: number = 5000;

const token: string = localStorage.getItem('token') ?? '';

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
    headers: { 'x-token': token },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export { createAPI };
