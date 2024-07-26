import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import MenuItem from '../../components/MenuItem/MenuItem';

const Profile = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Profile" isBack={true} />
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={styles.image}
          />
          <TouchableOpacity style={styles.editIconContainer}>
            <Icon name="edit" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Federica</Text>

        <View style={styles.menuContainer}>
          <MenuItem
            type="MaterialIcons"
            iconName="person-outline"
            title="Profile"
          />
          <MenuItem
            type="MaterialIcons"
            iconName="favorite-outline"
            title="Favorite"
          />
          <MenuItem
            type="MaterialIcons"
            iconName="payment"
            title="Payment Methods"
          />
          <MenuItem type="Feather" iconName="settings" title="Settings" />

          <MenuItem type="Ionicons" iconName="help-outline" title="Help" />
          <MenuItem type="MaterialIcons" iconName="logout" title="Logout" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
