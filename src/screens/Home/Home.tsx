import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-vector-icons/Icon';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="menu" size={30} color="black" style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="person"
              size={30}
              color="black"
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.welcomeText}>Welcome to Photon Technology</Text>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="New Products" component={NewProduct} />
      </Tab.Navigator>
    </SafeAreaView>
  );

export default Home;

const styles = StyleSheet.create({});
