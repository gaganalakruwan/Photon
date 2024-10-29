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
import {ScrollView} from 'react-native-gesture-handler';
import TextInputWithLable from '../../components/TextInputWithLable/TextInputWithLable';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParameterList} from '../../navigation/type';

const EditProfile: React.FC<
  StackScreenProps<StackParameterList, 'EDIT_PROFILE'>
> = ({navigation, route}) => {
  const {editProfileData} = route.params; // Receive the profile data

  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(editProfileData.full_name);
  const [phoneNumber, setPhoneNumber] = useState(editProfileData.phone_no);
  const [email, setEmail] = useState(editProfileData.email);
  const [dateOfBirth, setDateOfBirth] = useState(editProfileData.dob);

  useEffect(() => {
    LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
    LogBox.ignoreAllLogs();
    console.log('Profile', editProfileData);
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
        onBackPress={() => navigation.navigate('PROFILE' as never)}
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
            <Text style={styles.name}>{editProfileData.full_name}</Text>

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
                placeHolder="YY-MM-DD"
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
