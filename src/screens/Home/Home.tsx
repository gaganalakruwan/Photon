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
import NewProduct from '../NewProduct/NewProduct';
const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header isMenu isProfile />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Photon Technology</Text>
        <InputText
          value={search}
          onChangeText={setSearch}
          placeHolder="Search"
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
          initialRouteName="Categories"
          backBehavior="initialRoute"
          screenOptions={{
            tabBarScrollEnabled: true,
            swipeEnabled: false,
          }}>
          <Tab.Screen
            name="Categories"
            component={Categories}
            options={{tabBarLabel: 'Categories'}}
          />
          <Tab.Screen
            name="NewProducts"
            component={NewProduct}
            options={{tabBarLabel: 'NewProducts'}}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default Home;
