import AsyncStorage from '@react-native-async-storage/async-storage';
import SpinnerReducer from './SpinnerReducer';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import orderDataReducer from './orderDataReducer';

const spinnerConfig = {
  key: 'spinner',
  storage: AsyncStorage,
};

const orderDataConfig = {
  key: 'orderData',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  spinner: persistReducer(spinnerConfig, SpinnerReducer),
  orderData: persistReducer(orderDataConfig, orderDataReducer),
});

export default rootReducer;
