import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import {NAVIGATION_STACK} from '../constants/routs';
import {StackParameterList} from './type';
import MainAuth from '../screens/MainAuth/MainAuth';
import Splash from '../screens/Splash/Splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, TouchableOpacity } from 'react-native';
import Home from '../screens/Home/Home';
import Chat from '../screens/Chat/Chat';
import Profile from '../screens/Profile/Profile';
import Start1 from '../screens/Starting/Start1';
const AuthStack = createStackNavigator<StackParameterList>();
const Tab = createBottomTabNavigator();

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
        name={NAVIGATION_STACK.MAIN_HOME as keyof StackParameterList}
        component={NewBottomTab}
      />
      <AuthStack.Screen
        name={NAVIGATION_STACK.START1 as keyof StackParameterList}  // Added START1
        component={Start1}
      />
    </AuthStack.Navigator>
  );
};

const NewBottomTab = () => {

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      screenOptions={({route, navigation}) => ({
        header: () => <></>,
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {},
        tabBarStyle: {
          elevation: 1,
          
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
        key="home"
        name="Home"
        component={Home}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Discover',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {color: 'black'},
          // tabBarIcon: ({focused, color, size}) => {
          //   return <IconF name={'home'} size={25} color={color} />;
          // },
        }}
      />

      <Tab.Screen
        key="chat"
        name="Chat"
        component={Chat}
        options={{
          unmountOnBlur: true,
          // tabBarIcon: ({focused, color, size}) => {
          //   return <IconF name={'search'} size={25} color={color} />;
          // },
          
          tabBarLabel: 'Chat',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {color: 'black'},
        }}
      />
      <Tab.Screen
        key="profile"
        name="Profile"
        component={Profile}
        options={({route, navigation}) => ({
          unmountOnBlur: true,
          tabBarLabel: 'Profile',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {color: 'black'},
        
          // tabBarIcon: ({focused, color, size}) => {
          //   return (
          //     <Image
          //       source={require('../assets/icons/collection.png')}
          //       resizeMode="contain"
          //       style={{
          //         width: 25,
          //         height: 25,
          //         tintColor: color,
          //       }}
          //     />
          //   );
          // },
        })}
      />
       <Tab.Screen
        key="notification"
        name="Notification"
        component={Chat}
        options={{
          unmountOnBlur: true,
          // tabBarIcon: ({focused, color, size}) => {
          //   return <IconF name={'search'} size={25} color={color} />;
          // },
          
          tabBarLabel: 'notification',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {color: 'black'},
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthStackNavigator;
