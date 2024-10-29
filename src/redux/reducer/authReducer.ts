import {
  SET_TOKEN,
  SET_STATUS,
  SET_USERNAME,
  SET_USERID,
} from '../../constants/ReduxConstant';
import {authType} from '../../type';

const initialState: authType = {
  token: '',
  status: false,
  userName: '',
  userID: '',
};

function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case SET_USERNAME:
      return {
        ...state,
        userName: action.payload,
      };

    case SET_USERID:
      return {
        ...state,
        userID: action.payload,
      };

    default:
      return state;
  }
}

export default authReducer;
