import {
  SET_TOKEN,
  SET_STATUS,
  SET_USERNAME,
  SET_USERID,
} from '../../constants/ReduxConstant';

export const setToken = (data: any) => ({
  type: SET_TOKEN,
  payload: data,
});
export const setStatus = (data: any) => ({
  type: SET_STATUS,
  payload: data,
});

export const setUsername = (data: any) => ({
  type: SET_USERNAME,
  payload: data,
});

export const setUserID = (data: any) => ({
  type: SET_USERID,
  payload: data,
});
