import axios from 'axios';
//import { serverUrl } from '../config.json';

const UNAUTHORIZED = 401;
const axiosInstance = axios;

axiosInstance.defaults.headers.common = {
  'Content-Type': 'multipart/form-data',
  Authorization:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzIiwidXNlcm5hbWUiOiJ1c2VyM0BnbWFpbC5jb20iLCJBUElfVElNRSI6MTcyNTk4ODg5MX0.YvVwljo6lrp4KlWBAlgbUIox4LNuhcbX-DZDUAhPkrM',
};

axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response) {
      const {status} = error.response;
    }
    console.log('...........', error);
    return Promise.reject(error);
  },
);

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
