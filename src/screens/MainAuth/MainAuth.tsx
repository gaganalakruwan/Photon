import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getScaleNumber} from '../../utils/refDimention';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ActionButton from '../../components/ActionButton/ActionButton';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
const Tab = createMaterialTopTabNavigator();

const MainAuth = () => {
  const scrollRef = useRef<ScrollView>();

  return (
    <SafeAreaView
      accessible={false}
      style={[
        {
          zIndex: 100,
          flex: 1,
        },
      ]}>
      <Tab.Navigator
        tabBar={({state, descriptors, navigation: tabNav, position}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: getScaleNumber(10),
                paddingLeft: getScaleNumber(10),
              }}>
              <ScrollView
                horizontal={true}
                ref={scrollRef}
                contentContainerStyle={{width: '100%'}}
                showsHorizontalScrollIndicator={false}>
                {state.routes.map((route: any, index: string) => {
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
                      tabNav.navigate({
                        name: route.name,
                        key: route.key,
                        params: {actionType: 'tabPress'},
                        merge: true,
                      });
                      // tabNav.navigate(route.name, {actionType: 'tabPress'});
                    }
                  };
                  const inputRange = state.routes.map((_: any, i: number) => i);
                  const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map((i: any) =>
                      i === index ? 1 : 0,
                    ),
                  });
                  return (
                    <ActionButton
                      title={label}
                      onPress={onPress}
                      containerStyle={{width: 200}}
                    />
                  );
                })}
              </ScrollView>
            </View>
          );
        }}
        sceneContainerStyle={{backgroundColor: '#FFFFFF'}}
        initialRouteName={'Login'}
        backBehavior={'initialRoute'}
        screenOptions={{
          tabBarScrollEnabled: true,
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="Login"
          children={() => <Login />}
          options={{tabBarLabel: 'Login'}}
        />

        <Tab.Screen
          name="SignUp"
          children={() => <SignUp />}
          options={{tabBarLabel: 'SignUp'}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainAuth;

const styles = StyleSheet.create({});
