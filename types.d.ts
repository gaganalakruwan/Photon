export declare interface CustomNavigationType
  extends NavigationProp<ReactNavigation.RootParamList> {
  replace: (routeName: never, params?: never) => void;
  navigate: (routeName: never, params?: never) => void;
  push: (routeName: never, params?: never) => void;
  pop: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}
export declare type SlideType = {
  id: number;
  title: string;
  image: ImageSourcePropType;
};
export declare type SlideListType = Array<SlideType>;
