import {NavigationProp} from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';

type BaseRouteDataType = {
  key: string;
  name: string;
  params: any;
  path: string;
};

export declare interface CustomNavigationType
  extends NavigationProp<ReactNavigation.RootParamList> {
  replace: (routeName: never, params?: never) => void;
  push: (routeName: never, params?: never) => void;
  pop: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

//#region ------Redux State Types------

type SpinnerStateType = {
  loading: boolean;
  spinnerMessage: string;
};

type orderDataType = {
  orderData: Array;
};

type loadDataType = {
  categoryList: [];
  productList: [];
  profileDetails: [];
  favoriteList: [];
};

type authType = {
  token: string;
  status: boolean;
  userName: string;
  userID: string;
};

export declare interface ReduxState {
  spinner: SpinnerStateType;
  loadData: loadDataType;
  orderData: orderDataType;
  authData: authType;
}
