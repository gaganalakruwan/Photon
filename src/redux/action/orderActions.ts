import {
  REMOVE_ALL_ORDER_DETAIL,
  REMOVE_SELECTED_ORDER,
  SET_ORDER_DATA,
} from '../../constants/ReduxConstant';

export const addOrders = (data: any) => ({
  type: SET_ORDER_DATA,
  payload: data,
});

export const removeAllOrders = () => ({
  type: REMOVE_ALL_ORDER_DETAIL,
});

export const removeSingleItem = (id: any) => ({
  type: REMOVE_SELECTED_ORDER,
  payload: id,
});
