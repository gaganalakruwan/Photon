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

const Profile = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState('Federica Bodi');
  const [phoneNumber, setPhoneNumber] = useState('+945521236');
  const [email, setEmail] = useState('federica98@gmail.com');
  const [dateOfBirth, setDateOfBirth] = useState('DD/MM/YY');

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleUpdateProfile = () => {
    setIsEditing(false);
    //profile update logic
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        title="Profile"
        isBack={true}
        onPressSettings={isEditing ? () => setIsEditing(false) : undefined}
      />
      <ScrollView>
        <View style={styles.profileContainer}>
          {isEditing ? (
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
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  value={fullName}
                  onChangeText={setFullName}
                />
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="phone-pad"
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
                <Text style={styles.label}>Date of Birth</Text>
                <TextInput
                  style={styles.input}
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                />
                <TouchableOpacity
                  style={styles.updateButton}
                  onPress={handleUpdateProfile}>
                  <Text style={styles.updateButtonText}>Update Profile</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
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
              <View style={styles.menuContainer}>
                <MenuItem
                  type="MaterialIcons"
                  name="person-outline"
                  title="Profile"
                  onPress={handleEditProfile}
                />
                <MenuItem
                  type="MaterialIcons"
                  name="favorite-outline"
                  title="Favorite"
                />
                <MenuItem
                  type="MaterialIcons"
                  name="payment"
                  title="Payment Methods"
                />
                <MenuItem type="Feather" name="settings" title="Settings" />
                <MenuItem type="Ionicons" name="help-outline" title="Help" />
                <MenuItem type="MaterialIcons" name="logout" title="Logout" />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
