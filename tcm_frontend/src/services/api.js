import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = await localStorage.getItem('accessToken');
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  },
);

const errorHandler = (error) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  return response;
};

api.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);

export default api;
