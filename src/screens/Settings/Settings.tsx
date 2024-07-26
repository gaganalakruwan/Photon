import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import MenuItem from '../../components/MenuItem/MenuItem';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../constants/colors';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title="Settings"
        isBack={true}
        onBackPress={() => navigation.navigate('Profile' as never)}
      />
      <ScrollView>
        <View style={styles.settingsContainer}>
          <View style={styles.menuContainer}>
            <MenuItem
              type="MaterialIcons"
              name="lightbulb-outline"
              title="Notification Settings"
              rightIconType="Feather"
              rightIconName="chevron-right"
              size={35}
              iconContainerStyles={{
                backgroundColor: 'transparent',
                elevation: 0,
              }}
            />
            <MenuItem
              type="Ionicons"
              name="key-outline"
              title="Password Manager"
              rightIconType="Feather"
              rightIconName="chevron-right"
              size={35}
              iconContainerStyles={{
                backgroundColor: 'transparent',
                elevation: 0,
              }}
            />

            <MenuItem
              type="MaterialIcons"
              name="person-outline"
              title="Delete Account"
              rightIconType="Feather"
              rightIconName="chevron-right"
              size={35}
              iconContainerStyles={{
                backgroundColor: 'transparent',
                elevation: 0,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
