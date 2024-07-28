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

const EditProfile = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState('Federica Bodi');
  const [phoneNumber, setPhoneNumber] = useState('+945521236');
  const [email, setEmail] = useState('federica98@gmail.com');
  const [dateOfBirth, setDateOfBirth] = useState('DD/MM/YY');

  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs();
  }, []);

  const handleEditProfile = () => {
    //
  };

  const handleUpdateProfile = () => {};

  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Header
        title="Profile"
        isBack={true}
        onBackPress={() => navigation.navigate('Profile' as never)}
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
                onPress={handleEditProfile}>
                <Icon name="edit" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>Federica</Text>

            <View style={styles.editProfileContainer}>
              <TextInputWithLable
                label={'Full Name'}
                value={fullName}
                onChangeText={setFullName}
                placeHolder="Full Name"
              />

              <TextInputWithLable
                label={'Phone Number'}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeHolder="Phone Number"
                keyboardType="phone-pad"
              />

              <TextInputWithLable
                label={'Email'}
                value={email}
                onChangeText={setEmail}
                placeHolder="Email"
                keyboardType="email-address"
              />

              <TextInputWithLable
                label={'Date of Birth'}
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
                placeHolder="Date of Birth"
              />

              <TouchableOpacity
                style={styles.updateButton}
                onPress={handleUpdateProfile}>
                <Text style={styles.updateButtonText}>Update Profile</Text>
              </TouchableOpacity>
            </View>
          </>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
