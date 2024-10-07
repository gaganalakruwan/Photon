import axios from 'axios';
import {store} from '../redux/Store'; // Assuming you have Redux store setup
import {setToken} from '../redux/action/authAction'; // Action to update token in Redux

const UNAUTHORIZED = 401;
// const axiosInstance = axios.create({
//   baseURL: 'https://yourapi.com',
//   withCredentials: true, // Ensure this is enabled if you are working with cookies
// });
const refreshAxios = axios.create({
  baseURL: 'https://aws.erav.lk/photon',
  headers: {
    'Content-Type': 'multipart/form-data', // Example of setting a global Content-Type header
  }, // The same base URL or endpoint for refreshing tokens
});
const axiosInstance = axios;

// Add a request interceptor to dynamically add token to Authorization header
axiosInstance.interceptors.request.use(
  async config => {
    const state = store.getState();
    const token = state.authData.token; // Access the token from Redux state
    config.headers['Content-Type'] = 'multipart/form-data';
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Add a response interceptor to handle 401 and refresh token
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    console.log('>>>>>>>Error', error.response.status);

    if (error.response && error.response.status === 400) {
      try {
        console.log('>>>>>>>Error1111', error.response.status);
        const state = store.getState();
        var data = new FormData();
        data.append('username', state.authData.userName);
        // Call your refresh token API
        // Assuming you store a refresh token in Redux
        await refreshAxios
          .post('/RegenerateToken', data)
          .then(res => {
            console.log(res.data);
            console.log(originalRequest.headers);
            // Update the token in Redux
            store.dispatch(setToken(res.data.access_token));

            // Set new Authorization header
            originalRequest.headers.Authorization = `${res.data.access_token}`;

            // Retry the original request with the new token
            setTimeout(() => {
              return axiosInstance(originalRequest);
            }, 1000);
          })
          .catch(err => {
            console.log('...Error New', err.config);
          });
        // console.log("...............ExpireData",data);
      } catch (refreshError) {
        console.log('Token refresh failed', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

// export default axiosInstance;

// import axios from 'axios';
// //import { serverUrl } from '../config.json';
// import {store} from '../redux/Store';

// const UNAUTHORIZED = 401;
// const axiosInstance = axios;

// axiosInstance.defaults.headers.common = {
//   'Content-Type': 'multipart/form-data',
//   Authorization:
//     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzIiwidXNlcm5hbWUiOiJ1c2VyM0BnbWFpbC5jb20iLCJBUElfVElNRSI6MTcyNTk4ODg5MX0.YvVwljo6lrp4KlWBAlgbUIox4LNuhcbX-DZDUAhPkrM',
// };

// axiosInstance.defaults.withCredentials = true;

// axiosInstance.interceptors.response.use(
//   response => response,
//   error => {
//     if (error && error.response) {
//       const {status} = error.response;
//     }
//     console.log('...........', error);
//     return Promise.reject(error);
//   },
// );

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
