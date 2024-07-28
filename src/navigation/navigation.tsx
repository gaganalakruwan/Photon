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

import StartingPage from '../screens/Starting/Start1';
import StartingPage1 from '../screens/Starting/Start1';
import StartingPage2 from '../screens/Starting/Start2';
import StartingPage3 from '../screens/Starting/Start3';
import StartingPage4 from '../screens/Starting/Start4';

import App from '../../App';
import {colors} from '../constants/colors';
import Settings from '../screens/Settings/Settings';
import HeplCenter from '../screens/HelpCenter/HelpCenter';
import Favorites from '../screens/Favorites/Favorites';
import SpareParts from '../screens/SpareParts/SpareParts';
import NewSpareParts from '../screens/NewSpareParts/NewSpareParts';
import SparePartsTypes from '../screens/SparePartsTypes/SparePartsTypes';
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
        name={NAVIGATION_STACK.MAIN_AUTH as keyof StackParameterList}
        component={MainAuth}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.MAIN_HOME as keyof StackParameterList}
        component={NewBottomTab}
      />
      <AuthStack.Screen
        name={NAVIGATION_STACK.START1 as keyof StackParameterList} // Added START1
        component={StartingPage1}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.START2 as keyof StackParameterList} // Added START2
        component={StartingPage2}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.START3 as keyof StackParameterList} // Added START1
        component={StartingPage3}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.START4 as keyof StackParameterList} // Added START2
        component={StartingPage4}
      />

      <AuthStack.Screen
        name={NAVIGATION_STACK.SETTINGS as keyof StackParameterList} // Added START2
        component={Settings}
      />
      <AuthStack.Screen
        name={NAVIGATION_STACK.HELPCENTER as keyof StackParameterList} // Added START2
        component={HeplCenter}
      />
    </AuthStack.Navigator>
  );
};

const ProfileRoute = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile" screenOptions={{}}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

      <ProfileStack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

const HomeRoute = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{}}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="SpareParts"
        component={SpareParts}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="NewSpareParts"
        component={NewSpareParts}
        options={{headerShown: false}}
      />

      <HomeStack.Screen
        name="SparePartsTypes"
        component={SparePartsTypes}
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
