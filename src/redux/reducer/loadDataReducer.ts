import {
  START_LOADING,
  END_LOADING,
  SET_SPINNER_MESSAGE,
  SET_CATEGORY_LIST,
  SET_PRODUCT_LIST,
  SET_PROFILE_DATA,
  SET_FAVORITE_LIST,
} from '../../constants/ReduxConstant';
import {loadDataType} from '../../type';

const initialState: loadDataType = {
  categoryList: [],
  productList: [],
  profileDetails: [],
  favoriteList: [],
};

function loadDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.payload,
      };
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };

    case SET_PROFILE_DATA:
      return {
        ...state,
        profileDetails: action.payload,
      };
    case SET_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.payload,
      };

    default:
      return state;
  }
}

export default loadDataReducer;
