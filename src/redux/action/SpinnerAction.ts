import {
  END_LOADING,
  SET_SPINNER_MESSAGE,
  START_LOADING,
} from '../../constants/ReduxConstant';

export const startLoading = () => ({
  type: START_LOADING,
});
export const endLoading = () => ({
  type: END_LOADING,
});
export const setSpinnerMessage = (message: String) => ({
  type: SET_SPINNER_MESSAGE,
  payload: message,
});
