import {
  FlatList,
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import MenuItem from '../../components/MenuItem/MenuItem';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../constants/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './style';
import ItemCard from '../../components/ItemCard/ItemCard';
import {Animated} from 'react-native';
import SparePartsTypes from '../SparePartsTypes/SparePartsTypes';
import NewSpareParts from '../NewSpareParts/NewSpareParts';

const Tab = createMaterialTopTabNavigator();

const SpareParts = () => {
  const navigation = useNavigation();

  const handleSearch = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title="Spare Parts"
        isBack={true}
        onBackPress={() => navigation.navigate('Profile' as never)}
        onPressSearch={handleSearch}
      />

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
                  <Animated.Text
                    style={[
                      styles.tabText,
                      isFocused && styles.tabTextFocus,
                      {opacity},
                    ]}>
                    {label}
                  </Animated.Text>
                  {isFocused && <View style={styles.activeTabLine} />}
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        sceneContainerStyle={{backgroundColor: '#FFFFFF'}}
        initialRouteName="SparePartsTypes"
        backBehavior="initialRoute"
        screenOptions={{
          tabBarScrollEnabled: true,
          swipeEnabled: false,
        }}>
        <Tab.Screen
          name="SparePartsTypes"
          component={SparePartsTypes}
          options={{tabBarLabel: 'Types'}}
        />
        <Tab.Screen
          name="NewSpareParts"
          component={NewSpareParts}
          options={{tabBarLabel: 'New Parts'}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default SpareParts;
