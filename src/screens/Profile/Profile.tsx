import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../../components/CustomIcon/CustomIcon';
import MenuItem from '../../components/MenuItem/MenuItem';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal'; // Import the Modal component
import TextInputWithLable from '../../components/TextInputWithLable/TextInputWithLable';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

import {
  endLoading,
  setSpinnerMessage,
  startLoading,
} from '../../redux/action/SpinnerAction';
import {useDispatch} from 'react-redux';
import {ViewProfileDetailsFunction} from '../../service/api';
import {setProfileDetails} from '../../redux/action/loadDataActions';
import {store} from '../../redux/Store';

const Profile: React.FC<StackScreenProps<StackParameterList, 'PROFILE'>> = ({
  navigation,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  // useEffect(() => {
  //   LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
  //   LogBox.ignoreAllLogs();
  // }, []);

  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    getProfileDetails();
  }, []);

  const getProfileDetails = async () => {
    dispatch(setSpinnerMessage('Loading Profile Details...'));
    dispatch(startLoading());

    var data = new FormData();
    const state = store.getState();
    const userID = state.authData.userID; // Access the token from Redux state
    data.append('userid', userID);
    ViewProfileDetailsFunction(data)
      .then(res => {
        dispatch(setProfileDetails(res.data));
        // console.log('Profile', res.data);
        setProfileData(res.data[0]);
        // console.log('Profile2222', profileData.full_name);
        dispatch(endLoading());
      })
      .catch(error => {
        console.log(error);
        dispatch(endLoading());
      });
  };

  const handleSettings = () => {};

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    setModalVisible(false);
    // handle logout logic
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        isModalVisible && styles.mainContainerModalVisible,
      ]}>
      <Header
        title="Profile"
        isBack={true}
        onPressSettings={() => handleSettings()}
        onBackPress={() => navigation.navigate('MyHome' as never)}
      />
      <ScrollView>
        <View style={styles.profileContainer}>
          <>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/profile.jpg')}
                style={styles.image}
              />
              <TouchableOpacity
                style={styles.editIconContainer}
                onPress={() =>
                  navigation.navigate('EDIT_PROFILE' as never, {
                    editProfileData: profileData,
                  })
                }>
                <Icon name="edit" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>{profileData.full_name}</Text>
            <View style={styles.menuContainer}>
              <MenuItem
                type="MaterialIcons"
                name="person-outline"
                title="Profile"
                onPress={() =>
                  navigation.navigate('EDIT_PROFILE' as never, {
                    editProfileData: profileData,
                  })
                }
              />
              <MenuItem
                type="MaterialIcons"
                name="favorite-outline"
                title="Favorites"
                onPress={() => navigation.navigate('FAVORITES' as never)}
              />
              <MenuItem
                type="MaterialIcons"
                name="payment"
                title="Payment Methods"
              />
              <MenuItem
                type="Feather"
                name="settings"
                title="Settings"
                onPress={() => navigation.navigate('SETTINGS' as never)}
              />
              <MenuItem
                type="Ionicons"
                name="help-outline"
                title="Help"
                onPress={() => navigation.navigate('HELP_CENTER' as never)}
              />
              <MenuItem
                type="MaterialIcons"
                name="logout"
                title="Logout"
                onPress={handleLogout}
              />
            </View>
          </>
        </View>
      </ScrollView>

      <Modal
        style={styles.bottomModalView}
        isVisible={isModalVisible}
        backdropOpacity={0.5}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Logout</Text>
          <Text style={styles.modalText}>
            Are you sure you want to log out?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={cancelLogout}>
              <Text style={styles.noButtonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={confirmLogout}>
              <Text style={styles.yesButtonText}>Yes, Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Profile;
