import React, {useRef} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import styles from './style';
import {colors} from '../../constants/colors';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const Tab = createMaterialTopTabNavigator();

const MainAuth: React.FC<StackScreenProps<StackParameterList, 'MAIN_AUTH'>> = ({
  navigation,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo2.png')} style={styles.logo} />
      </View>
      <Tab.Navigator
        tabBar={({state, descriptors, navigation: tabNav, position}) => (
          <View style={styles.tabContainer}>
            {state.routes.map((route, index) => {
              const {options} = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

              const isFocused = state.index === index;

              const onPress = () => {
                const event = tabNav.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!isFocused && !event.defaultPrevented) {
                  tabNav.navigate(route.name);
                }
              };

              const inputRange = state.routes.map((_, i) => i);
              const opacity = position.interpolate({
                inputRange,
                outputRange: inputRange.map(i => (i === index ? 1 : 1)),
              });

              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={onPress}
                  style={styles.tab}>
                  <Animated.Text style={[styles.tabText, {opacity}]}>
                    {label}
                  </Animated.Text>

                  {isFocused && <View style={styles.activeTabLine} />}
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        sceneContainerStyle={{backgroundColor: '#FFFFFF'}}
        initialRouteName="Login"
        backBehavior="initialRoute"
        screenOptions={{
          tabBarScrollEnabled: true,
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{tabBarLabel: 'Login'}}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{tabBarLabel: 'SignUp'}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainAuth;
