import {persistStore, persistReducer} from 'redux-persist';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
const sagaMiddleWare = createSagaMiddleware();

// custom logger to use with redux middleware to log actions and state changes in the console for debugging purposes only in development mode (not in production mode) - this is not a redux logger middleware but a custom logger middleware => https://redux.js.org/advanced/middleware#custom-middleware
export const logger = (store: any) => (next: any) => (action: any) => {
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, logger));
// sagaMiddleWare.run();
const persistor = persistStore(store);

export {store, persistor};
