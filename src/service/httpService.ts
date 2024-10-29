import axios from 'axios';
import {store} from '../redux/Store';
import {setToken} from '../redux/action/authAction';

const UNAUTHORIZED = 401;

const refreshAxios = axios.create({
  baseURL: 'https://aws.erav.lk/photon',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const axiosInstance = axios;

// Request Interceptor to add token to Authorization header
axiosInstance.interceptors.request.use(
  async config => {
    const state = store.getState();
    const token = state.authData.token;
    config.headers['Content-Type'] = 'multipart/form-data';

    // Add Authorization header if token exists
    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

// Response Interceptor to handle 400 errors and token refresh
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    console.log('Error Status:', error.response?.status);

    if (error.response && error.response.status === 400) {
      try {
        const state = store.getState();
        const data = new FormData();
        data.append('username', state.authData.userName);

        // Call refresh token API
        const refreshResponse = await refreshAxios.post(
          '/RegenerateToken',
          data,
        );
        console.log('Refresh Response:', refreshResponse.data);

        // Update the token in Redux store
        const newToken = refreshResponse.data.access_token;
        store.dispatch(setToken(newToken));

        // Update the original request Authorization header
        originalRequest.headers.Authorization = `${newToken}`;

        // Retry the original request after a delay
        return new Promise(resolve => {
          setTimeout(() => resolve(axiosInstance(originalRequest)), 1000);
        });
      } catch (refreshError) {
        console.log('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

// Exporting CRUD methods for usage
export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};

// import axios from 'axios';
// import {store} from '../redux/Store'; // Assuming you have Redux store setup
// import {setToken} from '../redux/action/authAction'; // Action to update token in Redux

// const UNAUTHORIZED = 401;
// // const axiosInstance = axios.create({
// //   baseURL: 'https://yourapi.com',
// //   withCredentials: true, // Ensure this is enabled if you are working with cookies
// // });
// const refreshAxios = axios.create({
//   baseURL: 'https://aws.erav.lk/photon',
//   headers: {
//     'Content-Type': 'multipart/form-data', // Example of setting a global Content-Type header
//   }, // The same base URL or endpoint for refreshing tokens
// });
// const axiosInstance = axios;

// // Add a request interceptor to dynamically add token to Authorization header
// axiosInstance.interceptors.request.use(
//   async config => {
//     const state = store.getState();
//     const token = state.authData.token; // Access the token from Redux state
//     config.headers['Content-Type'] = 'multipart/form-data';
//     if (token) {
//       config.headers.Authorization = `${token}`;
//     }
//     return config;
//   },
//   error => Promise.reject(error),
// );

// // Add a response interceptor to handle 401 and refresh token
// axiosInstance.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config;
//     console.log('>>>>>>>Error', error.response.status);

//     if (error.response && error.response.status === 400) {
//       try {
//         console.log('>>>>>>>Error1111', error.response.status);
//         const state = store.getState();
//         var data = new FormData();
//         data.append('username', state.authData.userName);
//         // Call your refresh token API
//         // Assuming you store a refresh token in Redux
//         await refreshAxios
//           .post('/RegenerateToken', data)
//           .then(res => {
//             console.log(res.data);
//             console.log(originalRequest.headers);
//             // Update the token in Redux
//             store.dispatch(setToken(res.data.access_token));

//             // Set new Authorization header
//             originalRequest.headers.Authorization = `${res.data.access_token}`;

//             // Retry the original request with the new token
//             setTimeout(() => {
//               return axiosInstance(originalRequest);
//             }, 1000);
//           })
//           .catch(err => {
//             console.log('...Error New', err.config);
//           });
//         // console.log("...............ExpireData",data);
//       } catch (refreshError) {
//         console.log('Token refresh failed', refreshError);
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// // export default axiosInstance;
