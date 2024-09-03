import {
  SET_CATEGORY_LIST,
  SET_FAVORITE_LIST,
  SET_PRODUCT_LIST,
  SET_PROFILE_DATA,
} from '../../constants/ReduxConstant';

export const setCategorieList = (data: any) => ({
  type: SET_CATEGORY_LIST,
  payload: data,
});
export const setProductList = (data: any) => ({
  type: SET_PRODUCT_LIST,
  payload: data,
});
export const setProfileDetails = (data: any) => ({
  type: SET_PROFILE_DATA,
  payload: data,
});
export const setFavoriteList = (data: any) => ({
  type: SET_FAVORITE_LIST,
  payload: data,
});
