import AsyncStorage from '@react-native-async-storage/async-storage';
import SpinnerReducer from './SpinnerReducer';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import orderDataReducer from './orderDataReducer';
import authReducer from './authReducer';

const spinnerConfig = {
  key: 'spinner',
  storage: AsyncStorage,
};

const orderDataConfig = {
  key: 'orderData',
  storage: AsyncStorage,
};
const authDataConfig = {
  key: 'authData',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  spinner: persistReducer(spinnerConfig, SpinnerReducer),
  orderData: persistReducer(orderDataConfig, orderDataReducer),
  authData: persistReducer(authDataConfig, authReducer),
});

export default rootReducer;
