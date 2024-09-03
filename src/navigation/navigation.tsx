import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import {NAVIGATION_STACK} from '../constants/routs';
import {StackParameterList} from './type';
import MainAuth from '../screens/MainAuth/MainAuth';
import Splash from '../screens/Splash/Splash';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, TouchableOpacity} from 'react-native';
import Home from '../screens/Home/Home';
import Chat from '../screens/Chat/Chat';
import Profile from '../screens/Profile/Profile';
import IconO from 'react-native-vector-icons/Octicons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconSL from 'react-native-vector-icons/SimpleLineIcons';
import App from '../../App';
import {colors} from '../constants/colors';
import Settings from '../screens/Settings/Settings';
import HeplCenter from '../screens/HelpCenter/HelpCenter';
import Favorites from '../screens/Favorites/Favorites';
import SpareParts from '../screens/SpareParts/SpareParts';
import NewSpareParts from '../screens/NewSpareParts/NewSpareParts';
import SparePartsTypes from '../screens/SparePartsTypes/SparePartsTypes';
import ServiceRequest from '../screens/ServiceRequests/ServiceRequests';
import EditProfile from '../screens/EditProfile/EditProfile';
import Categories from '../screens/Categories/Categories';
import NewProducts from '../screens/NewProduct/NewProduct';
import MachineryList from '../screens/MachineryList/MachineryList';
import Machinery from '../screens/Machinery/Machinery';
import MachineDetails from '../screens/MachineryDetails/MachineryDetails';
import CheckOut from '../screens/CheckOut/CheckOut';
import PaymentMethod from '../screens/PaymentMethod/PaymentMethod';
import AddNewCard from '../screens/AddNewCard/AddNewCard';
import Payment from '../screens/Payment/Payment';
import Starting from '../screens/Starting/Starting';
import SparePartsDetails from '../screens/SparePartsDetails/SparePartsDetails';
const AuthStack = createStackNavigator<StackParameterList>();
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NAVIGATION_STACK.SPLASH as keyof StackParameterList}>
      <AuthStack.Screen
        name={NAVIGATION_STACK.SPLASH as keyof StackParameterList}
        component={Splash}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.STARTING as keyof StackParameterList}
        component={Starting}
      />
      <AuthStack.Screen
        name={NAVIGATION_STACK.MAIN_AUTH as keyof StackParameterList}
        component={MainAuth}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.MAIN_HOME as keyof StackParameterList}
        component={NewBottomTab}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.SETTINGS as keyof StackParameterList}
        component={Settings}
      />
      <AuthStack.Screen
        name={NAVIGATION_STACK.HELP_CENTER as keyof StackParameterList}
        component={HeplCenter}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.SERVICE_REQUESTS as keyof StackParameterList}
        component={ServiceRequest}
      />
      <AuthStack.Screen
        name={NAVIGATION_STACK.EDIT_PROFILE as keyof StackParameterList}
        component={EditProfile}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.MACHINERY_LIST as keyof StackParameterList}
        component={MachineryList}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.MACHINERY as keyof StackParameterList}
        component={Machinery}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.MACHINE_DETAILS as keyof StackParameterList}
        component={MachineDetails}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.CHECKOUT as keyof StackParameterList}
        component={CheckOut}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.PAYMENT_METHOD as keyof StackParameterList}
        component={PaymentMethod}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.ADD_NEW_CARD as keyof StackParameterList}
        component={AddNewCard}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.PAYMENT as keyof StackParameterList}
        component={Payment}
      />
    </AuthStack.Navigator>
  );
};

const ProfileRoute = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName={NAVIGATION_STACK.PROFILE as keyof StackParameterList}
      screenOptions={{}}>
      <ProfileStack.Screen
        name={NAVIGATION_STACK.PROFILE as keyof StackParameterList}
        component={Profile}
        options={{headerShown: false}}
      />

      <ProfileStack.Screen
        name={NAVIGATION_STACK.FAVORITES as keyof StackParameterList}
        component={Favorites}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

const HomeRoute = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={NAVIGATION_STACK.HOME as keyof StackParameterList}
      screenOptions={{}}>
      <HomeStack.Screen
        name={NAVIGATION_STACK.HOME as keyof StackParameterList}
        component={Home}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name={NAVIGATION_STACK.SPARE_PARTS as keyof StackParameterList}
        component={SpareParts}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name={NAVIGATION_STACK.NEW_SPARE_PARTS as keyof StackParameterList}
        component={NewSpareParts}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name={NAVIGATION_STACK.SPARE_PARTS_TYPES as keyof StackParameterList}
        component={SparePartsTypes}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name={NAVIGATION_STACK.SPARE_PARTS_DETAILS as keyof StackParameterList}
        component={SparePartsDetails}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name={NAVIGATION_STACK.CATEGORIES as keyof StackParameterList}
        component={Categories}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name={NAVIGATION_STACK.NEW_PRODUCTS as keyof StackParameterList}
        component={NewProducts}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const NewBottomTab = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      screenOptions={({route, navigation}) => ({
        header: () => <></>,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: colors.white,
        tabBarIconStyle: {},
        tabBarStyle: {
          elevation: 1,
          backgroundColor: colors.green,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginHorizontal: 20,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',

          ...Platform.select({
            ios: {
              marginTop: -35,
            },
            android: {
              marginTop: -20,
            },
          }),
        },
        tabBarHideOnKeyboard: true,
        tabBarButton: props => <TouchableOpacity {...props} />,
      })}>
      <Tab.Screen
        key="myhome"
        name="MyHome"
        component={HomeRoute}
        options={{
          unmountOnBlur: true,
          tabBarShowLabel: false,
          tabBarLabel: 'Discover',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({focused, color, size}) => {
            return <IconO name={'home'} size={25} color={color} />;
          },
        }}
      />

      <Tab.Screen
        key="chat"
        name="Chat"
        component={Chat}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused, color, size}) => {
            return (
              <IconI
                name={'chatbubble-ellipses-outline'}
                size={25}
                color={color}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarLabel: 'Chat',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {color: 'black'},
        }}
      />
      <Tab.Screen
        key="myProfile"
        name="MyProfile"
        component={ProfileRoute}
        options={({route, navigation}) => ({
          unmountOnBlur: true,
          tabBarLabel: 'Profile',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {color: 'black'},
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => {
            return <IconSL name={'user'} size={25} color={color} />;
          },
        })}
      />

      <Tab.Screen
        key="notification"
        name="Notification"
        component={Chat}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused, color, size}) => {
            return <IconSL name={'bell'} size={25} color={color} />;
          },

          tabBarLabel: 'notification',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {color: 'black'},
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthStackNavigator;
