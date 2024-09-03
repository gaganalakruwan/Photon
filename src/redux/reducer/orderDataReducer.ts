import {
  SET_ORDER_DATA,
  REMOVE_ALL_ORDER_DETAIL,
  REMOVE_SELECTED_ORDER,
} from '../../constants/ReduxConstant';
import {orderDataType} from '../../type';

const initialState: orderDataType = {
  orderData: [],
};

function orderDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ORDER_DATA:
      return {
        ...state,
        orderData: [...state.orderData, action.payload],
      };
    case REMOVE_ALL_ORDER_DETAIL:
      return {
        ...state,
        orderData: [],
      };

    case REMOVE_SELECTED_ORDER:
      return {
        ...state,
        orderData: state.orderData.filter(
          (order: any) => order.id !== action.payload,
        ),
      };
    default:
      return state;
  }
}

export default orderDataReducer;
