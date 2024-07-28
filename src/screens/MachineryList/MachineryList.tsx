import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-vector-icons/Icon';
import styles from './style';
import Header from '../../components/Header/Header';
import InputText from '../../components/InputTextSearch/InputText';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Categories from '../Categories/Categories';
import {useNavigation} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';
import NewProducts from '../NewProduct/NewProduct';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';
import Machinery from '../Machinery/Machinery';
const Tab = createMaterialTopTabNavigator();

const MachineryList: React.FC<
  StackScreenProps<StackParameterList, 'MACHINERY_LIST'>
> = ({navigation}) => {
  const handleSearch = () => {};

  const handleSlider = () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        isBack
        title="Machinery"
        onBackPress={() => navigation.navigate('HOME' as never)}
        onPressSearch={handleSearch}
        onPressSlider={handleSlider}
      />
      <View style={styles.container}>
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
          initialRouteName="MACHINERY"
          backBehavior="initialRoute"
          screenOptions={{
            tabBarScrollEnabled: true,
            swipeEnabled: false,
          }}>
          <Tab.Screen
            name="MACHINERY"
            component={Machinery}
            options={{tabBarLabel: 'Types'}}
          />
          <Tab.Screen
            name="NEW_PRODUCTS"
            component={NewProducts}
            options={{tabBarLabel: 'New Products'}}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default MachineryList;
